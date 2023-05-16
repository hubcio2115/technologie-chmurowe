FROM node AS builder
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent
COPY . .
RUN npm run build

FROM alpine
RUN apk add --no-cache nodejs
RUN apk add --no-cache npm
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY --from=builder /usr/src/app/node_modules /app/node_modules
COPY --from=builder /usr/src/app/dist /app/dist
COPY --from=builder /usr/src/app/package.json /app/package.json
COPY --from=builder /usr/src/app/package-lock.json /app/package-lock.json
WORKDIR /app

CMD ["npm", "run", "start"]
