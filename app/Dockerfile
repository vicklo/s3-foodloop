FROM node:11.6.0-alpine AS builder
COPY . ./test-app
WORKDIR /test-app
RUN npm i
RUN $(npm bin)/ng build --prod

FROM nginx:1.15.8-alpine
COPY --from=builder /test-app/dist/test-app/ /usr/share/nginx/html