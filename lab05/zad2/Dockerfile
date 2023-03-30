FROM node
ENV NODE_ENV=production
WORKDIR /usr/
COPY ["./app/package.json", "./"]
RUN npm install --production --silent
COPY . .
RUN chown -R node /usr/app/src
USER node
CMD ["npm", "run", "start"]
