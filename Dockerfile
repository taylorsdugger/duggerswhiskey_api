# base image
FROM node:9.6.1

# set working directory
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
CMD node src/index.js
EXPOSE 8081