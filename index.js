const fs = require('fs');
require('dotenv');
const app = require('express')();
const { default: axios } = require('axios');

const PORT = process.env.PORT || 3000;
const APP_NAME = process.env.APP_NAME || 'dummy-app';
app.get('/health', (req, res) => {
  const date = Date.now();
  fs.writeFileSync(`./volume/${date}`, `${date}`, { encoding: 'utf-8' });
  res.send({ status: APP_NAME });
});

app.get('/deep-health', async (req, res) => {
  try {
    const { data: postsHealth } = await axios.get(
      `${process.env.POSTS_URL}/health`
    );
    const { data: notificationsHealth } = await axios.get(
      `${process.env.NOTIFICATIONS_URL}/health`
    );
    res.send({ postsHealth, notificationsHealth });
  } catch (error) {
    res.send(error);
  }
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
