##
## Build
##
FROM node:lts-alpine as builder
LABEL Fonoster Team <fonosterteam@fonoster.com>

COPY . /build
WORKDIR /build

RUN apk add --no-cache --update curl bash git python3 make cmake g++ \
  && npm install && npm run build && npm pack

##
## Runner
##
FROM fonoster/base as runner

COPY --from=builder /build/fonoster-account-manager-*.tgz ./
RUN apk add --no-cache --update tini npm nodejs curl bash git python3 make cmake g++ \
  && npm install -g fonoster-account-manager-*.tgz \
  && apk del git npm curl python3 make cmake g++; \
  rm -rf /var/cache/apk/* /tmp/* /var/tmp/* fonoster-account-manager-*.tgz

USER fonoster

EXPOSE 50052/tcp
EXPOSE 3000/tcp
