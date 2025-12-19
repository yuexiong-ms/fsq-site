# FSQ Site - Full-Self Quality

A modern, responsive static website introducing FSQ (Full-Self Quality), an AI-powered test automation system built on Model Context Protocol.

## Features

- Modern, clean design inspired by BrowserStack
- Beautiful lavender/purple color scheme
- Smooth animations with Framer Motion
- Fully responsive (mobile, tablet, desktop)
- Animated statistics counters
- Cross-platform support showcase

## Tech Stack

- **Framework**: Vite + React + TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Package Manager**: pnpm

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm (install with `npm install -g pnpm`)

### Installation

1. Install dependencies:
```bash
pnpm install
```

2. Start the development server:
```bash
pnpm dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
pnpm build
```

The built files will be in the `dist` directory, ready for deployment.

### Preview Production Build

```bash
pnpm preview
```

## Project Structure

```
fsq-site/
├── .ddd/                      # Development documentation
│   └── PROJECT_PLAN.md
├── public/                    # Static assets
├── src/
│   ├── assets/               # Images, fonts
│   ├── components/           # Reusable components
│   │   ├── common/          # Button, FeatureCard
│   │   ├── layout/          # Header, Footer
│   │   └── sections/        # Hero, Features, Impact
│   ├── pages/               # Page components
│   │   └── Home.tsx
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── index.html
├── package.json
├── tailwind.config.js
└── vite.config.ts
```

## Key Components

### Hero Section
- Eye-catching headline with gradient text
- Animated background elements
- Quick stats preview
- Call-to-action buttons

### Features Section
- 6 feature cards with icons and descriptions
- Platform support badges (Windows, Android, iOS, macOS)
- Hover animations

### Impact Section
- Animated statistics counters
- Org-level impact metrics
- Visual emphasis on sustained gains

### Navigation
- Sticky header with smooth scrolling
- Mobile-responsive hamburger menu
- CTA button

### Footer
- Link sections (Product, Resources, Company)
- Social media links
- Copyright and legal links

## Customization

### Colors

Edit `tailwind.config.js` to customize the color palette:

```js
colors: {
  'primary-bg': '#f3f4ff',      // Main background
  'purple-primary': '#6366f1',   // Primary accent
  'purple-secondary': '#8b5cf6', // Secondary accent
  'blue-accent': '#3b82f6',      // Tertiary accent
}
```

### Content

Main content can be edited in:
- Hero: `src/components/sections/Hero.tsx`
- Features: `src/components/sections/Features.tsx`
- Impact Stats: `src/components/sections/Impact.tsx`

## Deployment

This is a static site and can be deployed to:
- Vercel: `vercel deploy`
- Netlify: Drag & drop the `dist` folder
- GitHub Pages: Copy `dist` contents to `gh-pages` branch
- Any static hosting service

## License

ISC

## Development Notes

See `.ddd/PROJECT_PLAN.md` for detailed development plan and technical decisions.
