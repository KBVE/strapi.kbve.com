FROM node:16

# Update and install LibVips
RUN apt-get update && apt-get install libvips-dev libtool automake autoconf nasm -y

# Environment Settings
ARG NODE_ENV=production yarn build
ENV NODE_ENV=${NODE_ENV}

WORKDIR /api/

COPY ./api/package.json ./api/yarn.lock ./
#COPY package.json .
#COPY yarn.lock .


ENV PATH /api/node_modules/.bin:$PATH
RUN yarn config set network-timeout 600000 -g
RUN yarn install
#RUN yarn add –frozen-lockfile

#WORKDIR /api
COPY ./api .
# Yarn Build
RUN yarn build

# Run on port 1337
#EXPOSE 1337
#CMD ["/bin/sh", "ENV_PATH=/env.config", "yarn start"] 

# docker build -t test:1.1.0 .