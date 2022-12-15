FROM node:18-alpine

ENV PWD="app"

RUN mkdir ${PWD}
COPY . ./${PWD}
WORKDIR /${PWD}
RUN npm i
EXPOSE 3000
