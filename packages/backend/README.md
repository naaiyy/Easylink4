# @easylink/backend

NestJS backend service for the Easylink platform.

## 🛠 Tech Stack

- **Framework:** NestJS
- **Database:** PostgreSQL with Prisma
- **Caching:** Redis
- **Cloud:** AWS Lambda
- **API Documentation:** OpenAPI/Swagger
- **Testing:** Jest & Supertest
- **Types:** TypeScript

## 🔄 Integration with @easylink/shared

This package integrates with `@easylink/shared` for:

- Common type definitions
- Shared utilities
- Validation schemas
- Constants

## 📦 Installation

```bash
pnpm install
```

## 🚀 Development

```bash
# Watch mode
pnpm start:dev

# Production build
pnpm build

# Production start
pnpm start

# Lint
pnpm lint

# Type check
pnpm type-check

# Run tests
pnpm test

# Run e2e tests
pnpm test:e2e
```

## 🏗 Architecture

- **API Gateway** - NestJS/AWS
- **Database Layer** - Prisma/PostgreSQL
- **Caching Layer** - Redis
- **Serverless Functions** - AWS Lambda
- **Monitoring** - Datadog/Prometheus
- **Security** - Helmet/CORS/Rate Limiting

## 🔒 Security Features

1. **API Security**

   - Helmet for HTTP headers
   - CORS configuration
   - Rate limiting
   - JWT authentication

2. **Data Security**
   - Input validation
   - Request sanitization
   - SQL injection protection (via Prisma)

## 📊 Monitoring & Logging

- Datadog integration
- Prometheus metrics
- AWS CloudWatch
- Structured logging

## 🔗 Dependencies

### Production Dependencies

- `@easylink/shared`: Shared utilities and types
- NestJS core packages:
  - `@nestjs/common`
  - `@nestjs/core`
  - `@nestjs/config`
  - `@nestjs/platform-express`
  - `@nestjs/swagger`
  - `@nestjs/throttler`
  - `@nestjs/schedule`
- Database & Cache:
  - `@prisma/client`
  - `redis`/`ioredis`
- AWS:
  - `@aws-sdk/client-lambda`
- Security:
  - `helmet`
  - `class-validator`
  - `class-transformer`
- Validation:
  - `zod`

### Development Dependencies

- Testing:
  - `jest`
  - `supertest`
  - `@nestjs/testing`
- Build tools:
  - `@nestjs/cli`
  - `@nestjs/schematics`
- Database:
  - `prisma`
- Code quality:
  - `eslint`
  - `prettier`
  - `typescript`

## 🔄 API Versioning

API versioning is handled through NestJS built-in versioning:

```typescript
@Controller({
  version: '1',
})
export class UserController {}
```

## ⚡ Performance Optimizations

1. **Caching Strategy**

   - Redis for high-performance caching
   - Cached responses for frequent queries
   - Cache invalidation patterns

2. **Database Optimization**

   - Prisma query optimization
   - Proper indexing
   - Connection pooling

3. **Request Handling**
   - Rate limiting
   - Request queuing
   - Compression

## 🤝 Contributing

1. Code Standards:

   - Follow NestJS best practices
   - Use dependency injection
   - Write unit tests
   - Document APIs

2. Testing Requirements:
   - Unit tests for services
   - E2E tests for APIs
   - Integration tests for external services

## 📚 Resources

- [NestJS Documentation](https://docs.nestjs.com)
- [Prisma Documentation](https://www.prisma.io/docs)
- [AWS Lambda Documentation](https://docs.aws.amazon.com/lambda)
