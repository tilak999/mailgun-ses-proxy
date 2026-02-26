ARG NODE_VERSION=20

FROM node:${NODE_VERSION}-alpine

ENV NODE_ENV=production
ENV DATABASE_URL="mysql://user:pass@localhost/db"

RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app
COPY --chown=node:node package*.json ./

USER node

RUN npm install

# Copy the rest of the source files into the image.
COPY --chown=node:node . .

# build code
RUN npm run build

# Expose the port that the application listens on.
EXPOSE 8080

# Run the application.
CMD ["npm","run","start"]
