FROM node:15.13-alpine3.13

WORKDIR /dummy-app
COPY . .
RUN mkdir volume
RUN yarn

CMD  node ./index.js