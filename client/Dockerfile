FROM node:12.16.1-alpine3.9 AS builder
COPY . ./app
WORKDIR /app
RUN npm i
RUN $(npm bin)/ng build --prod

FROM nginx:1.17.9-alpine
COPY --from=builder /app/dist/client/ /usr/share/nginx/html