# from base image node
FROM node:8.11-slim

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# copy oter files as well
#COPY *  /usr/src/app/
COPY package.json .

RUN npm install
COPY ./ .
#expose the port
EXPOSE 8080

# command to run when intantiate an image
#CMD ["DEBUG=demo-app:* npm start]
CMD ["npm","start"]
