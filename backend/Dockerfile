FROM node:latest

RUN mkdir /code
WORKDIR /code

COPY . .

RUN yarn install

RUN yarn run build

CMD yarn run start
