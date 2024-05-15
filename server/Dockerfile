FROM node:18-alpine
WORKDIR /app
COPY package.json .
RUN npm i
# COPY . . == COPY . /app
COPY . /app 
EXPOSE 5050 
CMD ["node", "index.js"]