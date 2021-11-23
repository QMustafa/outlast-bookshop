FROM node:12-alpine
#python3 is needed by gyp (one of the dependencies in package json)
RUN apk update && apk add python3 make g++
ADD . /outlastBookshop_frontEnd
WORKDIR /outlastBookshop_frontEnd
RUN npm install