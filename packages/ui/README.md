# @easylink/ui

A shared UI component library for the Easylink platform, built with shadcn/ui.

## 🛠 Tech Stack

- **Framework:** React
- **Styling:** TailwindCSS
- **Types:** TypeScript
- **Icons:** Radix Icons
- **Utilities:**
  - class-variance-authority
  - clsx
  - tailwind-merge
  - tailwindcss-animate

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
pnpm dev

# Build
pnpm build

# Lint
pnpm lint

# Type check
pnpm type-check
```

## 🧱 Components

All components are built using shadcn/ui principles:

- **Inputs & Forms**

  - Button
  - Input
  - Select
  - Checkbox
  - Radio
  - Switch
  - Textarea

- **Layout**

  - Card
  - Container
  - Section
  - Grid

- **Feedback**

  - Alert
  - Toast
  - Progress
  - Spinner

- **Navigation**

  - Tabs
  - Breadcrumb
  - Pagination
  - Menu

- **Overlay**
  - Modal
  - Drawer
  - Popover
  - Tooltip

## 📝 Usage

```tsx
import { Button, Input } from '@easylink/ui';

export function MyComponent() {
  return (
    <div>
      <Input placeholder="Enter text" />
      <Button variant="primary">Submit</Button>
    </div>
  );
}
```

## 🎨 Customization

Components can be customized using:

1. **Variants**

   ```tsx
   <Button variant="secondary" size="lg" />
   ```

2. **className prop**

   ```tsx
   <Card className="bg-custom-color" />
   ```

3. **TailwindCSS theme**
   ```js
   // tailwind.config.js
   module.exports = {
     theme: {
       extend: {
         // Your customizations
       },
     },
   };
   ```

## 🔗 Dependencies

### Production Dependencies

- `@easylink/shared`: Shared utilities and types
- `@radix-ui/react-icons`: Icon set
- `class-variance-authority`: Component variants
- `tailwindcss-animate`: Animation utilities

### Development Dependencies

- React & React DOM
- TypeScript
- TailwindCSS
- Build tools (tsup)
- Testing utilities

## 🤝 Contributing

1. Components should:

   - Be fully typed
   - Include proper documentation
   - Follow shadcn/ui patterns
   - Use shared types/utilities where applicable

2. Testing:
   - Include unit tests
   - Test accessibility
   - Test different variants

## 📚 Resources

- [shadcn/ui Documentation](https://ui.shadcn.com)
- [TailwindCSS Documentation](https://tailwindcss.com)
- [Radix UI Documentation](https://www.radix-ui.com)
