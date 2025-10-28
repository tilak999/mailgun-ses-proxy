# Test Suite Documentation

This directory contains comprehensive test cases for the mailgun-to-ses-proxy application.

## Test Structure

```
tests/
├── setup.ts                    # Global test setup and mocks
├── routes/                     # API route tests
│   ├── v3-messages.test.ts     # /v3/[siteId]/messages endpoint
│   ├── v1-send.test.ts         # /v1/send endpoint
│   └── stats-action.test.ts    # /stats/[action] endpoint
├── services/                   # Service layer tests
│   ├── newsletter-service.test.ts
│   ├── transaction-email-service.test.ts
│   └── stats-service.test.ts
├── lib/                        # Utility function tests
│   ├── form-data-to-object.test.ts
│   └── core.test.ts
├── integration/                # Integration tests
│   └── api-routes.test.ts
└── README.md                   # This file
```

## Test Coverage

### API Routes
- **v3/[siteId]/messages**: Newsletter message queuing
  - ✅ Successful message queuing
  - ✅ Missing siteId validation
  - ✅ Form data parsing errors
  - ✅ Service error handling
  - ✅ Multiple recipients handling
  - ✅ Default email-id assignment

- **v1/send**: System email sending
  - ✅ Successful email sending
  - ✅ Email payload validation
  - ✅ Missing required fields
  - ✅ Multiple validation errors
  - ✅ Service error handling
  - ✅ Default from/replyTo assignment

- **stats/[action]**: Statistics retrieval
  - ✅ Newsletter usage statistics
  - ✅ Invalid action handling
  - ✅ Request parsing errors
  - ✅ Service error handling
  - ✅ Edge cases (large ranges, special characters)

### Services
- **Newsletter Service**
  - ✅ Queue message creation
  - ✅ SQS integration
  - ✅ Database operations
  - ✅ Message validation and processing
  - ✅ Error handling and retry logic

- **Transaction Email Service**
  - ✅ SES email sending
  - ✅ Email formatting
  - ✅ Database logging
  - ✅ Configuration validation
  - ✅ Multiple recipients

- **Stats Service**
  - ✅ Database queries
  - ✅ Date range handling
  - ✅ Response formatting
  - ✅ Error handling

### Utilities
- **Form Data to Object**
  - ✅ Basic form data conversion
  - ✅ Multiple values handling
  - ✅ File handling options
  - ✅ Edge cases and special characters
  - ✅ Mailgun-specific use cases

- **Core Library**
  - ✅ API response formatting
  - ✅ Email payload validation
  - ✅ Error handling utilities

### Integration Tests
- ✅ End-to-end workflow testing
- ✅ Error propagation across services
- ✅ Consistent error response formats
- ✅ Concurrent request handling

## Running Tests

```bash
# Run all tests
npm test

# Run tests once (CI mode)
npm run test:run

# Run tests with coverage
npm run test:coverage

# Run tests in watch mode
npm run test:watch

# Run tests with UI
npm run test:ui
```

## Test Configuration

The test suite uses:
- **Vitest** as the test runner
- **Vi** for mocking
- **Node environment** for testing
- **Global setup** for consistent mocking

### Mocked Dependencies
- AWS SDK (SES, SQS)
- Prisma database client
- Logger
- Service functions
- AWS helper functions

## Best Practices

1. **Isolation**: Each test is isolated with proper setup/teardown
2. **Mocking**: External dependencies are mocked to ensure fast, reliable tests
3. **Coverage**: Tests cover happy paths, error cases, and edge cases
4. **Realistic Data**: Test data mimics real-world scenarios
5. **Assertions**: Clear, specific assertions for expected behavior

## Refactoring Confidence

These tests provide confidence for refactoring by:
- ✅ Covering all API endpoints and their edge cases
- ✅ Testing service layer business logic
- ✅ Validating error handling paths
- ✅ Ensuring consistent response formats
- ✅ Testing integration between components
- ✅ Covering utility functions thoroughly

The comprehensive test suite ensures that any refactoring changes will be caught if they break existing functionality, while also documenting the expected behavior of the system.