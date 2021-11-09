FROM node:16-alpine

WORKDIR /app
COPY package*.json ./

RUN npm ci
COPY . .

# For dev only
CMD ["npm", "run", "serve"]