FROM node:6-alpine

RUN mkdir -p /servicedoc
WORKDIR /servicedoc

RUN npm install -g servicedoc

ENTRYPOINT ["servicedoc"]
