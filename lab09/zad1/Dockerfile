FROM node
ENV NODE_ENV=production
WORKDIR /usr/src/app
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
RUN npm install --production --silent
COPY . .
RUN chown -R node /usr/src/app
USER node
RUN npm run build

HEALTHCHECK --interval=10s --timeout=10s --retries=3 \
  CMD curl -f http://localhost:3000/ready || exit 1

CMD ["npm", "run", "start"]
