FROM node:17.7.2 as builder
WORKDIR /app
COPY package*.json .
RUN npm ci && npm cache clean --force
COPY . . 
RUN npm run build
EXPOSE 4200
CMD ["npm", "run", "start"]

FROM nginx:1.17.10-alpine
EXPOSE 80
COPY --from=builder /app/dist/foodloop /usr/share/nginx/html
