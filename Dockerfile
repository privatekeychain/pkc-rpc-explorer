FROM node:8.16.0-alpine

RUN set -ex; \
    npm config set registry https://registry.npm.taobao.org;

COPY . /tmp/pkc-rpc-explorer

RUN set -ex; \
    cd /tmp/pkc-rpc-explorer; \
    npm install;

CMD npm start

EXPOSE 3002
