# Mailgun-to-SES Proxy

This API server acts as a proxy to enable sending newsletter emails from Ghost using Amazon SES (Simple Email Service) instead of Mailgun. It mimics the Mailgun API endpoints while routing the actual email-sending logic through SES on the backend.

# Purpose

Ghost natively integrates with Mailgun for sending newsletters. This proxy allows you to continue using Ghost's Mailgun integration while leveraging the cost-effectiveness and reliability of Amazon SES.

# Usage Instructions

Before starting the server, ensure you have configured the necessary environment variables and updated your `.env` file with the appropriate values.

1. Set the required environment variables in your Docker setup.

```sh
# server url
bulkEmail__mailgun__baseUrl: "http://localhost:3000/api/v3" 
# should match the one set in .env file
bulkEmail__mailgun__apiKey: "<api key>"            
# should be verified in SES identity
bulkEmail_mailgun_domain: "<sending domain>"
```