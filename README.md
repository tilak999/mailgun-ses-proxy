# mailgun-ses-proxy
Proxy api server to use AWS SES instead of mailgun in ghost


## TODO

implement endpoint 
```
v3/test.in.co/events?limit=300&event=opened&tags=bulk-email&begin=1726212771.297&end=1726222380.138&ascending=yes
```


### Docker file

```

ARG NODE_VERSION=20

#FROM node:${NODE_VERSION}-bullseye
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

# Run the application.
CMD ["npm", "run", "start"]
```