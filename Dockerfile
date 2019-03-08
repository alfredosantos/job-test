FROM node

WORKDIR /src

ADD . /src

EXPOSE 3978

HEALTHCHECK --interval=5m --timeout=3s CMD curl --fail http://127.0.0.1:3978/healthcheck || exit 1

ENTRYPOINT ["npm", "start"]
