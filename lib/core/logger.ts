import pino from 'pino';

const logger = pino({
    level: process.env.NODE_ENV != "production" ? 'debug' : 'info'
});

export default logger.child({ app: "mailgun-ses-proxy" });