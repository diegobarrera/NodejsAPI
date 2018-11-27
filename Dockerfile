FROM node:10.13.0

RUN npm install --production
RUN npm start

EXPOSE 3000