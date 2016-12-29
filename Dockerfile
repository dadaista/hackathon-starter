FROM node
MAINTAINER Davide Carboni


RUN apt-get update && apt-get install -y git mongodb

RUN mkdir -p /data/db

#USER node
WORKDIR /home/node



RUN git clone https://github.com/dadaista/hackathon-starter.git bitshelter-web

WORKDIR /home/node/bitshelter-web

RUN npm install
EXPOSE 3000

CMD service mongodb start && node app.js 

