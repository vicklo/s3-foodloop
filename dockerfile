# FROM node:17.7.2 as builder
# WORKDIR /app
# COPY package*.json .
# RUN npm ci && npm cache clean --force
# COPY . . 
# RUN npm run build
# EXPOSE 4200
# CMD ["npm", "run", "start"]

# FROM nginx:1.17.10-alpine
# EXPOSE 80   
# COPY --from=builder /app/dist/foodloop /usr/share/nginx/html

# FROM node:17.7.2 AS my-app-build
# WORKDIR /app
# COPY . .
# RUN npm ci && npm run build

# stage 2

# FROM nginx:alpine
# COPY /dist/foodloop /usr/share/nginx/html
# EXPOSE 80

FROM node:17.7.2 AS ng-build
WORKDIR /app
COPY . .
RUN npm ci && npm run build

# stage 2

FROM nginx:alpine
COPY --from=ng-build /app/dist/foodloop /usr/share/nginx/html
EXPOSE 80

