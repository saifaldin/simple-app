const fs = require('fs');
require('dotenv');
const express = require('express');
const app = express();
const { join } = require('path');
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(
  join(__dirname, '/var/lib/sqlite/db/db.db'),
  sqlite3.OPEN_READWRITE,
  (err) => {
    if (err) {
      console.error(err.message);
    }
  }
);
const { default: axios } = require('axios');

const PORT = process.env.PORT || 3000;
const APP_NAME = process.env.APP_NAME || 'dummy-app';

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.method, req.originalUrl);
  next();
});

app.get('/health', (req, res) => {
  console.log('health - DONE');
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
    console.log('deep-health - DONE');
    res.send({ postsHealth, notificationsHealth });
  } catch (error) {
    console.log(error);
    res.send(error);
  }
});

app.get('/posts', (req, res, next) => {
  let tableFound = true;
  db.run('select * from posts', (err) => {
    tableFound = false;
  });

  const sql = `select * from posts`;
  let results = {};
  db.run(sql, [], (err, rows) => {
    if (!tableFound) {
      db.run('create table posts (id varchar(20) primary key, caption text)');
      return res.send({});
    }
    if (err) {
      console.log(err);
      return res.send({ err });
    }
    rows.forEach((row, i) => {
      results[i] = row.caption;
    });
    res.send({ results });
  });
});

app.post('/posts', (req, res, next) => {
  let tableFound = true;
  db.run('select * from posts', (err) => (tableFound = false));
  if (!tableFound) {
    db.run('create table posts (id varchar(20) primary key, caption text)');
  }
  db.run(`insert into posts (caption) values ("${req.body.caption}")`);
  res.send();
});

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
