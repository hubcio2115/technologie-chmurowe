FROM node
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent
COPY . .
RUN chown -R node /usr/src/app
USER node
RUN npm run build
CMD ["npm", "run", "start"]
