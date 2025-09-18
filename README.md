# Next.js 15.5.2 Professional Scaffold

A production-ready Next.js starter template with TypeScript, Tailwind CSS v4, shadcn/ui components, and Framer Motion animations.

## Features

- ⚡ **Next.js 15.5.2** with App Router
- 🔷 **TypeScript** for type safety
- 🎨 **Tailwind CSS v4** for styling
- 🧩 **shadcn/ui** components
- ✨ **Framer Motion** animations
- 📝 **Server Actions** with Zod validation
- 🎯 **ESLint** and **TypeScript** configuration
- 📱 **Responsive design** with mobile-first approach
- 🌙 **Dark mode** support
- 🚀 **Production optimized**

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm (comes with Node.js)

### Installation

1. Clone or download this project
2. Install dependencies:

\`\`\`bash
npm install
\`\`\`

3. Run the development server:

\`\`\`bash
npm run dev
\`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

\`\`\`
├── app/                    # Next.js App Router pages
│   ├── demo/              # Demo page with interactive forms
│   ├── globals.css        # Global styles and Tailwind configuration
│   ├── layout.tsx         # Root layout component
│   ├── loading.tsx        # Global loading UI
│   ├── not-found.tsx      # 404 page
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── ui/               # shadcn/ui components
│   ├── animated-counter.tsx
│   ├── contact-form.tsx
│   ├── features.tsx
│   ├── form-field.tsx
│   ├── hero.tsx
│   ├── page-transition.tsx
│   ├── scroll-reveal.tsx
│   └── submit-button.tsx
├── hooks/                # Custom React hooks
│   └── use-toast.ts
├── lib/                  # Utilities and server actions
│   ├── actions.ts        # Server Actions
│   ├── utils.ts          # Utility functions
│   └── validations.ts    # Zod schemas
└── public/               # Static assets
\`\`\`

## Key Technologies

### Next.js 15.5.2
- App Router for modern routing
- Server Components for better performance
- Server Actions for form handling
- Built-in optimizations

### TypeScript
- Full type safety
- Excellent developer experience
- Strict configuration

### Tailwind CSS v4
- Utility-first CSS framework
- Custom design system
- Dark mode support
- Responsive design utilities

### shadcn/ui
- High-quality, accessible components
- Customizable with CSS variables
- Built on Radix UI primitives

### Framer Motion
- Smooth animations and transitions
- Pre-built animation variants
- Scroll-triggered animations
- Performance optimized

### Server Actions & Validation
- Type-safe form handling
- Zod schema validation
- Error handling and loading states
- Progressive enhancement

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run type-check` - Run TypeScript compiler

## Customization

### Colors and Theming
Edit the CSS variables in `app/globals.css` to customize the color scheme.

### Components
All UI components are in `components/ui/` and can be customized as needed.

### Animations
Animation variants are defined in `components/ui/motion.tsx` and can be extended.

### Forms and Validation
Server Actions are in `lib/actions.ts` and validation schemas in `lib/validations.ts`.

## Deployment

This project is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy with zero configuration

You can also deploy to other platforms that support Next.js.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - feel free to use this scaffold for your projects.
