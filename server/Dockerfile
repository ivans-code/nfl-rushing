FROM node:12.16.1-alpine3.9
COPY . /server
WORKDIR /server

RUN apk add --update bash
RUN chmod +x wait-for-it.sh
RUN chmod +x wait_and_start.sh
RUN npm i

EXPOSE 3000
CMD ./wait_and_start.sh