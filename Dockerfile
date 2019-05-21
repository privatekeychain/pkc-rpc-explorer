FROM node:8.16.0-alpine

RUN set -ex; \
    npm config set registry https://registry.npm.taobao.org; \
    echo "https://mirrors.aliyun.com/alpine/v3.9/main/" > /etc/apk/repositories; \
    apk update; \
    apk add --no-cache openssl bash apache2-utils;

COPY . /tmp/pkc-rpc-explorer

RUN set -ex; \
    cd /tmp/pkc-rpc-explorer; \
    npm install;

CMD npm start

EXPOSE 3002
