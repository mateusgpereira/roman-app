FROM node:12.20.0-alpine3.10
WORKDIR /usr/app
COPY package.json .
RUN yarn
COPY . .
