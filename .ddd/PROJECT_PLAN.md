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
- **Tailwind CSS v3.4**
  - Utility-first approach for rapid development
  - Easy to create modern, responsive designs
  - Custom color palette based on BrowserStack-inspired theme
  - Custom animations and transitions
  - Note: Using v3 (stable) instead of v4 (beta) for production reliability

### Animations
- **Framer Motion**
  - Smooth scroll animations
  - Page transitions
  - Interactive hover effects
  - Professional micro-interactions
  - Animated counters with spring physics

### Additional Libraries
- **Lucide React** - Modern icon library (lightweight alternative to Font Awesome)
- **TypeScript** - Type safety
- **ESLint** - Code quality

### Package Manager
- **pnpm** - Fast, disk space efficient package manager

### Typography
- **System Font Stack** - No external font dependencies
  - macOS/iOS: San Francisco (via -apple-system)
  - Windows: Segoe UI
  - Android: Roboto
  - Fallback: Helvetica Neue, Arial
  - Benefits: Faster load times, native look, privacy-friendly

## Site Structure

### Pages
1. **Home/Landing Page**
   - Hero section with FSQ introduction
   - Key benefits overview
   - Org-level impact statistics
   - Call-to-action

2. **Features Section**
   - Recording capabilities
   - Replay functionality
   - MCP integration
   - Platform coverage (Windows, Android, iOS, macOS)
   - 6 feature cards with icons

3. **Impact Metrics Section**
   - Weekly automated test steps (400K+)
   - Time savings (75 person-days/week)
   - Resource optimization (3 FTE reduced per platform)
   - Animated counters
   - Visual emphasis on sustained gains

4. **How It Works** (Future - Phase 3)
   - Step-by-step process
   - Integration workflow
   - Technical overview

5. **Get Started** (Future - Phase 3)
   - Documentation link
   - GitHub repository
   - Contact information

## Design System

### Color Palette (BrowserStack-inspired)
```
Primary Background: Light lavender/purple tint
- primary-bg: #f3f4ff (main background)
- secondary-bg: #ffffff (card backgrounds)

Accent Colors:
- purple-primary: #6366f1 (indigo - primary CTA)
- purple-secondary: #8b5cf6 (violet - secondary accents)
- blue-accent: #3b82f6 (tertiary accents)

Text Colors (Tailwind defaults):
- text-slate-900: Primary text
- text-slate-600: Secondary text
- text-slate-400: Tertiary text
```

### Typography Scale
- Font sizes: Responsive scale (text-sm to text-7xl)
- Font weights: 300, 400, 500, 600, 700, 800
- Line heights: Optimized for readability

### Components Built

1. **Navigation Bar** ✅
   - Sticky header with backdrop blur
   - Logo with gradient background
   - Desktop navigation links
   - Mobile hamburger menu (responsive)
   - CTA button (Get Started)
   - Smooth scroll behavior

2. **Hero Section** ✅
   - Animated gradient background (floating circles)
   - Product name headline with gradient text ("Full-Self Quality")
   - Value proposition tagline ("Record Once, Replay Everywhere")
   - Three-line headline layout with line breaks
   - Subheadline explaining FSQ's capabilities
   - Dual CTA buttons (Get Started, Watch Demo)
   - Preview stats cards (3 metrics: 400K+ Test Steps, 75 Days Saved, 3 FTE Reduced)
   - Scroll indicator animation
   - Animated mockup component showing FSQ workflow

3. **Feature Cards** ✅
   - 6 feature cards with unique icons:
     * Record & Replay
     * MCP Integration
     * Cross-Platform
     * Org-Level Impact
     * Regression Quality Gate
     * Continuous Scaling
   - Icon + title + description
   - Hover lift animations
   - Grid layout (responsive: 1/2/3 columns)
   - Gradient backgrounds (customizable per card)
   - Scroll-triggered fade-in animations

4. **Stats Section** ✅
   - Animated counters (count up on scroll)
   - 3 stat cards with icons and gradients
   - Large numbers with spring physics
   - Org-level impact messaging
   - Gradient call-out section
   - Background decorative elements

5. **Platform Cards** ✅
   - Windows, Android, iOS, macOS
   - Emoji icons
   - Hover scale effects
   - Clean, minimal design

6. **Footer** ✅
   - Four column layout (Brand, Product, Resources, Company)
   - Social media links (GitHub, Twitter, LinkedIn, Email)
   - Bottom bar with legal links
   - Fully responsive design
   - Dark theme (slate-900 background)

7. **Animated Mockup** ✅
   - Window-style UI mockup showing FSQ workflow
   - Three animated scenes cycling every 3.5 seconds:
     * Scene 1: Record Test in Natural Language (BDD test case example)
     * Scene 2: AI Records & Generates Code (browser preview, AI conversion, MCP server)
     * Scene 3: Replay Across All Platforms (Windows, Mac, Android, iOS)
   - Gradient background with animated glow effects
   - Progress indicator bar for each scene
   - Scene navigation dots
   - Staggered fade-in animations for list items

## Development Phases

### ✅ Completed Phases

#### Phase 1: Project Setup
- [x] Initialize Vite + React + TypeScript with pnpm
- [x] Configure Tailwind CSS v3.4 (stable)
- [x] Install Framer Motion & Lucide React
- [x] Setup project structure (components, pages, utils)
- [x] Configure PostCSS
- [x] Setup system font stack (no external fonts)

#### Phase 2: MVP Page
- [x] **Components**
  - [x] Navigation component (Header)
  - [x] Hero section with animations
  - [x] Feature cards component (FeatureCard)
  - [x] Stats counter component (Impact section)
  - [x] Footer component
  - [x] Button component (common)
  - [x] Home page integration
- [x] **Design**
  - [x] Lavender/purple theme (#f3f4ff)
  - [x] Card-based layout
  - [x] Gradient accents
  - [x] Responsive breakpoints
- [x] **Animations**
  - [x] Scroll animations (whileInView)
  - [x] Hover effects on cards
  - [x] Animated counters
  - [x] Page transitions

#### Phase 3: Deployment
- [x] Docker setup with multi-stage build
- [x] Nginx configuration for production
- [x] GitHub Actions workflow for automated deployment
- [x] Build scripts (debug.sh, release.sh)
- [x] GitHub Pages deployment

---

### 🚧 Current Phase

#### Phase 4: Content Refinement (In Progress)
- [x] **Text refinement**
  - [x] Refine hero section copy (Updated to "Full-Self Quality" + "Record Once, Replay Everywhere")
  - [x] Update hero layout (Three-line headline structure)
  - [x] Add animated mockup showing FSQ workflow
  - [x] Update mockup content to show actual FSQ usage (BDD tests, AI recording, cross-platform replay)
  - [ ] Update feature descriptions
  - [ ] Polish impact metrics messaging
  - [ ] Add more detailed product information
- [ ] **Layout refinement**
  - [ ] Update navigation links
  - [ ] Refine menu structure
  - [ ] Improve mobile menu experience
  - [ ] Adjust spacing and alignment
- [ ] **Button cleanup**
  - [ ] Remove/update buttons without real actions
  - [ ] Implement proper click handlers
  - [ ] Add proper navigation links
- [ ] **Media integration**
  - [ ] Add product demo video link
  - [ ] Embed video player (YouTube/Vimeo)
  - [ ] Add video thumbnail
  - [ ] Optimize video loading

---

### 📋 Future Phases

#### Phase 5: Additional Content
- [ ] Testimonials/case studies
- [ ] FAQ section
- [ ] Documentation links

#### Phase 6: Advanced Polish (Optional)
- [ ] Additional parallax effects
- [ ] Advanced performance optimization
- [ ] Comprehensive cross-browser testing
- [ ] Accessibility audit (WCAG compliance)
- [ ] SEO optimization (Open Graph, structured data)
- [ ] Analytics integration

## File Structure (Actual)
```
fsq-site/
├── .ddd/                      # Development documentation
│   ├── PROJECT_PLAN.md       # This file
│   └── PHASE2_COMPLETE.md    # Phase 2 completion notes
├── public/                    # Static assets
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.tsx           # Reusable button with variants
│   │   │   └── FeatureCard.tsx      # Feature card with icon
│   │   ├── layout/
│   │   │   ├── Header.tsx           # Navigation bar
│   │   │   └── Footer.tsx           # Site footer
│   │   └── sections/
│   │       ├── Hero.tsx             # Hero section
│   │       ├── AnimatedMockup.tsx   # Animated workflow mockup
│   │       ├── Features.tsx         # Features grid
│   │       └── Impact.tsx           # Stats/impact section
│   ├── pages/
│   │   └── Home.tsx                 # Home page composition
│   ├── App.tsx                      # Main app component
│   ├── main.tsx                     # Entry point
│   ├── index.css                    # Global styles + Tailwind
│   └── vite-env.d.ts
├── index.html                       # HTML template with meta tags
├── package.json
├── pnpm-lock.yaml
├── postcss.config.js                # PostCSS configuration
├── tailwind.config.js               # Tailwind configuration
├── tsconfig.json
├── tsconfig.app.json
├── tsconfig.node.json
├── vite.config.ts
├── eslint.config.js
└── README.md
```

## Key Features Implemented

### Visual Design ✅
- Clean, modern layout inspired by BrowserStack
- Soft purple/lavender background (#f3f4ff)
- Card-based design with subtle shadows
- Ample whitespace for readability
- Rounded corners (rounded-xl, rounded-2xl)
- Gradient text and backgrounds

### Animations ✅
- Fade-in on scroll for sections (whileInView)
- Counter animations for statistics (useSpring)
- Hover lift effects on cards
- Smooth transitions throughout
- Animated background elements (floating circles)
- Scroll indicator animation

### Responsive Design ✅
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Hamburger menu for mobile
- Stacked layouts on small screens
- Grid layouts adapt (1/2/3 columns)

## Content Structure (Implemented)

### Hero Message
- Product Name: "Full-Self Quality" (gradient purple)
- Tagline: "Record Once, Replay Everywhere" (black text)
- Three-line layout structure
- Description: "FSQ delivers org-level regression testing across all platforms. Built on Model Context Protocol for AI-powered workflows that provide sustained headcount leverage, not just efficiency gains."
- Right side: Animated mockup showing FSQ workflow (3 scenes cycling every 3.5s)

### Key Value Props
1. **Record & Replay** - Capture user interactions and replay as automated tests
2. **MCP Integration** - Built on Model Context Protocol for AI-powered workflows
3. **Cross-Platform** - Windows, Android, iOS, macOS support
4. **Org-Level Impact** - Sustained headcount leverage, not just efficiency gains
5. **Regression Quality Gate** - AI-powered agents as core quality component
6. **Continuous Scaling** - Ongoing, repeatable gains

### Statistics Highlighted
- 400,000+ automated test steps executed weekly
- ~75 person-days saved per week
- ~3 FTE reduced per platform per week
- Ongoing, repeatable gains

## Technical Decisions & Lessons Learned

### Tailwind CSS Version
- **Decision**: Use Tailwind v3.4 instead of v4
- **Reason**: v4 is still in beta and has breaking changes in PostCSS configuration
- **Result**: Stable, production-ready styling with full feature support

### Font Strategy
- **Decision**: Use system font stack instead of Google Fonts
- **Reason**:
  - Faster load times (no external requests)
  - Privacy-friendly (no tracking)
  - Native look and feel per platform
  - Zero font licensing concerns
- **Result**: Clean, professional typography with excellent performance

### Icon Library
- **Decision**: Use Lucide React instead of Font Awesome
- **Reason**: Lightweight, modern, tree-shakeable, TypeScript support
- **Result**: Clean icons with small bundle size

### Animation Library
- **Decision**: Framer Motion for all animations
- **Reason**:
  - React-first API
  - Declarative animations
  - Spring physics for natural motion
  - Scroll-triggered animations (whileInView)
- **Result**: Smooth, professional animations throughout

### Type Safety
- **Decision**: Fix LucideIcon import issue
- **Problem**: `LucideIcon` type not exported from lucide-react
- **Solution**: Use `ComponentType<IconProps>` interface
- **Result**: Full type safety maintained

## Current Status: Phase 2 Complete ✅

### What's Working
- ✅ Development server running on http://localhost:5173
- ✅ Hot Module Replacement (HMR) working
- ✅ All components rendering correctly
- ✅ Animations smooth and performant
- ✅ Responsive design on all breakpoints
- ✅ No compilation errors
- ✅ TypeScript strict mode enabled

### What's Ready
The site now has:
1. Fully functional navigation with mobile menu
2. Eye-catching hero section with animations
3. Six feature cards showcasing FSQ capabilities
4. Animated statistics showing org-level impact
5. Platform support badges
6. Professional footer with links

### Performance Optimizations Applied
- System fonts (no external font loading)
- Optimized animations (GPU-accelerated transforms)
- Lazy loading with whileInView (animations trigger on scroll)
- Tree-shaken icon imports
- Static site generation ready

## Commands

```bash
# Development
pnpm install          # Install dependencies
pnpm dev             # Start dev server (http://localhost:5173)

# Build for production
pnpm build           # Build static site to dist/

# Preview production build
pnpm preview         # Preview built site

# Linting
pnpm lint            # Run ESLint
```

## Notes
- Focus on modern, clean design ✅
- Emphasize org-level impact over individual efficiency ✅
- Use the lavender/purple background from BrowserStack reference ✅
- Ensure fast load times (static site) ✅
- Make it easy to update content ✅
- No external dependencies for fonts ✅
- Production-ready with Tailwind v3 ✅
- Fully responsive and accessible ✅
