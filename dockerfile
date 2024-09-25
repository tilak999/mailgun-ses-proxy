ARG NODE_VERSION=20

FROM node:${NODE_VERSION}-alpine

ENV NODE_ENV=production

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app
COPY --chown=node:node package*.json ./

USER node

RUN npm install
RUN npm prune --production

# Copy the rest of the source files into the image.
COPY --chown=node:node . .

# Expose the port that the application listens on.
EXPOSE 8080

HEALTHCHECK --interval=5m --timeout=3s \
  CMD curl -f http://localhost:8080/healthcheck || exit 1

# Run the application.
CMD ["npm","run","start"]