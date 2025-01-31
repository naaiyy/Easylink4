# Easylink Frontend

This package contains the Next.js frontend application for the Easylink platform. It's set up with modern tooling and follows best practices for a scalable React application.

## 🛠 Tech Stack

- **Framework:** Next.js 14
- **Language:** TypeScript
- **Styling:** TailwindCSS
- **State Management:** React Query
- **Icons:** Lucide React
- **HTTP Client:** Axios
- **Form Validation:** Zod
- **Testing:** Jest
- **Fonts:** Inter & ABC Favorit

## 📁 Project Structure

```
frontend/
├── src/
│   ├── app/                    # Next.js 13+ App Router
│   │   ├── layout.tsx         # Root layout
│   │   └── page.tsx          # Home page
│   │
│   ├── components/
│   │   └── ui/               # Reusable UI components
│   │
│   ├── providers/            # React Context Providers
│   │
│   ├── lib/
│   │   └── utils/           # Frontend-specific utilities
│   │                        # (shared utils from @easylink/shared)
│   │
│   └── api/
│       ├── services/        # API service functions
│       └── types/          # Uses types from @easylink/shared
│
├── public/                   # Static assets
├── config/                  # Configuration files
└── tests/                   # Test files

# Shared Package Integration (@easylink/shared)
└── @easylink/shared/        # Available through workspace dependency
    ├── types/              # Shared TypeScript interfaces
    │   ├── auth.ts        # Authentication types
    │   ├── user.ts        # User models
    │   └── api.ts         # API interfaces
    │
    ├── utils/             # Shared utility functions
    │   ├── date.ts        # Date formatting
    │   └── validation.ts  # Common validations
    │
    ├── constants/         # Shared constants
    └── validators/        # Shared Zod schemas
```

## 🚀 Getting Started

1. Install dependencies:

   ```bash
   pnpm install
   ```

2. Run development server:

   ```bash
   pnpm dev
   ```

3. Build for production:
   ```bash
   pnpm build
   ```

## 📝 Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm type-check` - Run TypeScript compiler check
- `pnpm test` - Run tests
- `pnpm clean` - Clean build outputs

## 🔧 Configuration Files

- `tsconfig.json` - TypeScript configuration

  - Extends root configuration
  - Path aliases configured (@/\*)
  - Next.js specific settings

- `tailwind.config.js` - TailwindCSS configuration

  - Custom font families (Inter & Favorit)
  - Content paths configured
  - Extensible theme setup

- `postcss.config.js` - PostCSS configuration

  - TailwindCSS plugin
  - Autoprefixer setup

- `jest.config.js` - Jest configuration
  - Next.js specific setup
  - Module path aliases
  - JSDOM environment

## 📚 Key Features

1. **Type Safety**

   - Full TypeScript support
   - Strict mode enabled
   - Path aliases configured

2. **Styling**

   - TailwindCSS with PostCSS
   - Custom font configuration
   - Responsive design ready

3. **Development Experience**

   - ESLint configuration
   - Prettier integration
   - Hot reload enabled

4. **Testing**
   - Jest setup with JSDOM
   - React Testing Library ready
   - Module mocking configured

## 🔄 Shared Package Integration

The frontend package integrates with `@easylink/shared` in several ways:

1. **Types Usage**

   ```typescript
   import { User, AuthResponse } from '@easylink/shared/types';
   ```

2. **Utility Functions**

   ```typescript
   import { formatDate } from '@easylink/shared/utils';
   ```

3. **Constants**

   ```typescript
   import { API_ENDPOINTS } from '@easylink/shared/constants';
   ```

4. **Validators**
   ```typescript
   import { userSchema } from '@easylink/shared/validators';
   ```

This integration ensures:

- Type consistency across the entire application
- Shared business logic
- DRY (Don't Repeat Yourself) principle
- Single source of truth for common functionality

## 🎨 UI Components Integration

The frontend package integrates with `@easylink/ui`, our shared UI component library based on shadcn/ui. Here's how it works:

1. **Import UI Components**

   ```typescript
   import { Button, Card, Input } from '@easylink/ui';
   ```

2. **TailwindCSS Integration**

   - Frontend's tailwind.config.js extends UI package's configuration
   - Automatically includes all UI components' styles
   - Shares consistent theme and animations

3. **Available Components**
   All shadcn components from the UI package are available:

   - Buttons
   - Forms
   - Dialogs
   - Cards
   - And more...

4. **Usage Example**

   ```typescript
   import { Button } from '@easylink/ui'

   export default function MyComponent() {
     return (
       <Button variant="default">
         Click me
       </Button>
     )
   }
   ```

## 📦 Dependencies Management

The frontend package includes all necessary dependencies for UI components:

- `@easylink/ui`: Our shared UI component library
- `class-variance-authority`: For component variants
- `tailwindcss-animate`: For animations
- `clsx` & `tailwind-merge`: For class management

All dependencies are managed through pnpm and are defined in `package.json`. Key dependencies include:

### Production Dependencies

- `next`: ^14.0.4
- `react`: ^18.2.0
- `react-dom`: ^18.2.0
- `tailwindcss`: ^3.4.0
- `lucide-react`: ^0.309.0
- `react-query`: ^3.39.3
- `axios`: ^1.6.5
- `zod`: ^3.22.4

### Development Dependencies

- TypeScript and types
- ESLint and Prettier
- Testing utilities
- Build tools

## 🔜 Next Steps

The following areas are prepared for implementation:

1. Authentication flows
2. API integration
3. Component library
4. State management
5. Form handling
6. Error boundaries
7. Loading states
8. SEO optimization

## 🤝 Contributing

1. Follow the monorepo's development workflow
2. Ensure all tests pass
3. Follow the established code style
4. Update documentation as needed

## 📖 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [TailwindCSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)
