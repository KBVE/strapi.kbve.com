# Currently Node 16, lets see bump it up to Node 18.
# Bump was not great, reverting
FROM node:16-bullseye

# Update and install LibVips
RUN apt-get update && apt-get install libvips-dev libtool automake autoconf nasm -y

# Adding PM2 - 9/19/22 - IS 29
# Issue https://github.com/KBVE/kbve.com/issues/29
RUN npm install pm2 -g

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
EXPOSE 1337
#CMD ["yarn", "ENV_PATH=/env.config", "start"] 
#CMD ["yarn", "start"]

# 
# IS 29 , REF 12.
#
# CMD ["which", "yarn"] Gods Bless PhuckR1
# CMD ["pm2-runtime", "process.yml"]
CMD ["pm2-runtime", "ecosystem.config.js"]

#
# Test Build Command 
# docker build -t test:1.1.0 .
