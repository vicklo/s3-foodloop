FROM node:16
run mkdir -p /app
WORKDIR /app/src/app
COPY package.json package-lock.json ./
RUN npm install
COPY . .
EXPOSE 4200
cmd ['npm','run','start']