FROM node:6-alpine

COPY . ./bikesback

WORKDIR /bikesback

RUN npm install && \
  rm -rf /var/lib/apt/lists/*  \
  && deluser --remove-home node \
  && adduser -D node \
  && chown -R node:node /bikesback

EXPOSE 3001

USER node

ENV FRONT_URL=http://localhost:3000

CMD npm start
