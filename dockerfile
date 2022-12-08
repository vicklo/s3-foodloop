FROM node:17.7.2
WORKDIR /app
COPY package*.json .
RUN npm ci && npm cache clean --force
COPY . . 
RUN npm run build
EXPOSE 4200
CMD ["npm", "run", "start"]