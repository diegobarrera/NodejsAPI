FROM node:8.12.0

RUN npm install --production
RUN npm start

EXPOSE 3000