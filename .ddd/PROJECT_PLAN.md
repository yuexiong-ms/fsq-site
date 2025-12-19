# FSQ Site Development Plan

## Project Overview
A modern static marketing site to introduce FSQ (Full-self quality) - an MCP-based test recording and replay system delivering org-level automation impact.

## Tech Stack

### Core Framework
- **Vite + React** (v18+)
  - Fast HMR and build times
  - Modern development experience
  - Easy static site export
  - Excellent TypeScript support

### Styling
- **Tailwind CSS**
  - Utility-first approach for rapid development
  - Easy to create modern, responsive designs
  - Custom color palette based on BrowserStack-inspired theme
  - Custom animations and transitions

### Animations
- **Framer Motion**
  - Smooth scroll animations
  - Page transitions
  - Interactive hover effects
  - Professional micro-interactions

### Additional Libraries
- **React Router** - Client-side routing
- **Lucide React** - Modern icon library
- **TypeScript** - Type safety
- **ESLint + Prettier** - Code quality

## Site Structure

### Pages
1. **Home/Landing Page**
   - Hero section with FSQ introduction
   - Key benefits overview
   - Org-level impact statistics
   - Call-to-action

2. **Features** (Section on home or separate)
   - Recording capabilities
   - Replay functionality
   - MCP integration
   - Platform coverage (Windows, Android, iOS, macOS)

3. **Impact Metrics**
   - Weekly automated test steps
   - Time savings
   - Resource optimization
   - Visual data presentation

4. **How It Works**
   - Step-by-step process
   - Integration workflow
   - Technical overview

5. **Get Started** (CTA section)
   - Documentation link
   - GitHub repository
   - Contact information

## Design System

### Color Palette (BrowserStack-inspired)
```
Primary Background: Light lavender/purple tint (from screenshot)
- bg-primary: #f3f4ff / #f5f3ff (similar to image)
- bg-secondary: #ffffff

Accent Colors:
- purple-primary: #6366f1 (indigo)
- purple-secondary: #8b5cf6 (violet)
- blue-accent: #3b82f6
- text-primary: #1e293b (slate-900)
- text-secondary: #64748b (slate-500)
```

### Typography
- **Headings**: Inter or DM Sans (modern, clean)
- **Body**: Inter (readable, professional)
- Font sizes: Responsive scale (text-base to text-6xl)

### Components
1. **Navigation Bar**
   - Sticky header
   - Logo + navigation links
   - CTA button (Get Started)

2. **Hero Section**
   - Large headline about FSQ
   - Subheadline explaining MCP + recording/replay
   - Animated background elements
   - Primary CTA

3. **Feature Cards**
   - Icon + title + description
   - Hover animations
   - Grid layout (responsive)

4. **Stats Section**
   - Large numbers with animations
   - 400,000+ test steps
   - 75 person-days saved
   - 3 FTE reduced per platform

5. **Platform Cards**
   - Windows, Android, iOS, macOS
   - Visual indicators
   - Hover effects

6. **Footer**
   - Links (Documentation, GitHub, etc.)
   - Social media
   - Copyright

## Development Phases

### Phase 1: Project Setup
- [x] Initialize Vite + React + TypeScript
- [x] Configure Tailwind CSS
- [x] Install Framer Motion
- [x] Setup project structure
- [x] Configure routing

### Phase 2: Core Components
- [ ] Navigation component
- [ ] Hero section
- [ ] Feature cards component
- [ ] Stats counter component
- [ ] Footer component

### Phase 3: Content Pages
- [ ] Home page layout
- [ ] Feature sections
- [ ] Impact metrics section
- [ ] How it works section

### Phase 4: Animations & Polish
- [ ] Scroll animations
- [ ] Hover effects
- [ ] Page transitions
- [ ] Responsive optimization

### Phase 5: Build & Deploy
- [ ] Production build configuration
- [ ] SEO optimization (meta tags, Open Graph)
- [ ] Performance optimization
- [ ] Deployment setup

## File Structure
```
fsq-site/
├── .ddd/                      # Development documentation
│   └── PROJECT_PLAN.md
├── public/                    # Static assets
│   ├── favicon.ico
│   └── images/
├── src/
│   ├── assets/               # Images, fonts
│   ├── components/           # Reusable components
│   │   ├── common/          # Button, Card, etc.
│   │   ├── layout/          # Header, Footer, Layout
│   │   └── sections/        # Hero, Features, Stats
│   ├── pages/               # Page components
│   │   └── Home.tsx
│   ├── styles/              # Global styles
│   │   └── index.css
│   ├── utils/               # Helper functions
│   ├── App.tsx
│   ├── main.tsx
│   └── vite-env.d.ts
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

## Key Features to Implement

### Visual Design
- Clean, modern layout inspired by BrowserStack
- Soft purple/lavender background (#f3f4ff)
- Card-based design with subtle shadows
- Ample whitespace
- Rounded corners (rounded-xl, rounded-2xl)

### Animations
- Fade-in on scroll for sections
- Counter animations for statistics
- Hover lift effects on cards
- Smooth page transitions
- Parallax effects (subtle)

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Hamburger menu for mobile
- Stacked layouts on small screens

## Content Structure

### Hero Message
"Full-Self Quality: AI-Powered Test Automation at Scale"
"Record once, replay everywhere. FSQ delivers org-level regression testing across all platforms."

### Key Value Props
1. **Record & Replay** - Capture user interactions and replay as automated tests
2. **MCP Integration** - Built on Model Context Protocol for AI-powered workflows
3. **Cross-Platform** - Windows, Android, iOS, macOS support
4. **Org-Level Impact** - Sustained headcount leverage, not just efficiency gains

### Statistics to Highlight
- 400,000+ automated test steps executed weekly
- ~75 person-days saved per week
- ~3 FTE reduced per platform per week
- Ongoing, repeatable gains

## Next Steps
1. Initialize project with Vite + React + TypeScript
2. Setup Tailwind CSS and Framer Motion
3. Create component structure
4. Build hero and navigation
5. Implement feature sections
6. Add animations and polish
7. Optimize and deploy

## Notes
- Focus on modern, clean design
- Emphasize org-level impact over individual efficiency
- Use the lavender/purple background from BrowserStack reference
- Ensure fast load times (static site)
- Make it easy to update content
