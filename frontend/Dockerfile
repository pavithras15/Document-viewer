FROM node:20

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

ENV REACT_APP_API_URL=http://localhost:4000

CMD ["npm", "start"]