FROM node:18-alpine
WORKDIR /app
COPY . /app
RUN npm install && pwd
EXPOSE 8099
CMD ["npm", "start"]