FROM node:boron

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package.json /usr/src/app/
RUN npm install

COPY . /usr/src/app

ENV WEB_PORT 8080
ENV NODE_ENV "development"


EXPOSE 8080
CMD [ "npm", "start" ]