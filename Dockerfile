FROM alpine:latest
RUN apk add nodejs nodejs-npm
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD ["npm","start"] 