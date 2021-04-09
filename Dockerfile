FROM node:15.13-alpine3.13

RUN apk --no-cache add curl

WORKDIR /dummy-app
COPY . .
RUN mkdir volume
RUN yarn

CMD  node ./index.js