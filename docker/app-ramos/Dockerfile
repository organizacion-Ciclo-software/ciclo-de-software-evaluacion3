FROM node:18-alpine
WORKDIR /usr/src/app
COPY ./src/app-ramos/package*.json ./
RUN npm install
COPY ./src/app-ramos .
EXPOSE 8080
CMD ["npm", "start"]
