FROM node:8.16.0-alpine

RUN set -ex; \
    npm config set registry https://registry.npm.taobao.org; \
    echo "https://mirrors.aliyun.com/alpine/v3.9/main/" > /etc/apk/repositories; \
    apk update; \
    apk add --no-cache bash apache2-utils git python build-base;

COPY . /env/pkc-rpc-explorer

RUN set -ex; \
    cd /env/pkc-rpc-explorer; \
    npm install; \
    npm config set color false; 

CMD npm start

EXPOSE 3002
