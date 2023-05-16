FROM alpine:latest AS build

ARG GIT_REPO

WORKDIR /usr/app

RUN apk update
RUN apk upgrade
RUN apk add curl git
RUN apk add --update nodejs
RUN apk add --update npm
RUN npm install -g yarn

RUN git clone ${GIT_REPO} .
RUN yarn install
RUN yarn build

FROM nginx:latest
COPY --from=build /usr/app/dist/ /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
