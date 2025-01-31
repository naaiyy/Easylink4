# @easylink/shared

Core utilities and types for the Easylink platform.

## Structure

```
src/
├── types/
│   ├── common/     # Generic TypeScript utilities and common types
│   └── api/        # API and HTTP related types
├── utils/
│   ├── formatting/ # Date, currency, and text formatting
│   ├── validation/ # Zod schemas and validation utilities
│   └── http/       # API response helpers and HTTP utilities
└── constants/      # Shared constants and enums
```

## Installation

```bash
pnpm add @easylink/shared
```

## Usage Examples

### API Types and Responses

```typescript
import { ApiResponse, createApiResponse, HttpError } from '@easylink/shared';

// Success response
const successResponse = createApiResponse(true, {
  data: 'some data',
});

// Error response
const errorResponse = createApiResponse(false, null, {
  code: 'VALIDATION_ERROR',
  message: 'Invalid input',
});

// Custom error
throw new HttpError(400, 'INVALID_INPUT', 'Email is required');
```

### Common Types

```typescript
import {
  PaginationParams,
  PaginatedResponse,
  ID,
  Nullable,
  Optional,
  Status,
} from '@easylink/shared';

// Pagination
const params: PaginationParams = {
  page: 1,
  limit: 10,
  sortBy: 'createdAt',
  sortOrder: 'desc',
};

// Generic response type
interface UserResponse extends PaginatedResponse<User> {
  // ...additional fields
}
```

### Formatting Utilities

```typescript
import {
  formatDate,
  formatRelativeTime,
  formatCurrency,
  truncateText,
} from '@easylink/shared';

const date = formatDate(new Date()); // "January 11, 2025"
const timeAgo = formatRelativeTime(date); // "2 hours ago"
const price = formatCurrency(1000); // "1.000,00 €"
const text = truncateText('Long text...', 20); // "Long text..."
```

### Validation

```typescript
import {
  emailSchema,
  passwordSchema,
  phoneSchema,
  isValidUrl,
  isValidFileSize,
  isValidFileType,
} from '@easylink/shared';

// Zod schema validation
const email = emailSchema.parse('user@example.com');

// Utility validations
const isValidImage = isValidFileType('photo.jpg', ['jpg', 'png']);
const isSizeOk = isValidFileSize(1024 * 1024, 2); // 2MB limit
```

### HTTP Utilities

```typescript
import { getAuthHeader, parseJWT, JWTPayload } from '@easylink/shared';

// Auth headers
const headers = getAuthHeader('token...');

// JWT handling
const payload = parseJWT<JWTPayload>(token);
```

## Best Practices

1. Type Usage:

   ```typescript
   // DO: Use generic types
   type Result<T> = ApiResponse<T>;

   // DON'T: Create service-specific types
   interface UserProfile { ... } // ❌ Should be in user service
   ```

2. Utility Usage:

   ```typescript
   // DO: Use generic utilities
   formatDate(date);
   isValidUrl(url);

   // DON'T: Add business logic
   validateUserProfile(); // ❌ Should be in user service
   ```

3. Error Handling:

   ```typescript
   // DO: Use shared error types
   throw new HttpError(400, 'INVALID_INPUT', 'Bad request');

   // DON'T: Create service-specific errors
   class UserServiceError extends Error {} // ❌
   ```

## Development

```bash
# Install dependencies
pnpm install

# Development mode
pnpm dev

# Build package
pnpm build

# Run tests
pnpm test

# Type checking
pnpm type-check
```

## Guidelines

1. Keep It Generic:

   - Only add truly shared functionality
   - Avoid service-specific code
   - Focus on reusability

2. Type Safety:

   - Use TypeScript features effectively
   - Provide good type inference
   - Document type constraints

3. Performance:
   - Keep utilities lightweight
   - Avoid heavy dependencies
   - Enable tree-shaking
