FROM node:22-alpine

WORKDIR /app
COPY package*.json ./

RUN npm install

COPY . .

EXPOSE ${BACKEND_PORT}

CMD ["npm", "run", "start"]
