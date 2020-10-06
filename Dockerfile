FROM node:current-slim
WORKDIR /
COPY package.json .
RUN npm install
RUN npm build
COPY package.json .
RUN npm install
RUN npm start
EXPOSE 9003
CMD [ "npm", "start", "build" ]
COPY . .