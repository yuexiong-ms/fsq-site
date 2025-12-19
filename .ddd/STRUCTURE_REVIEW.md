# Folder Structure Review

## Current Structure

```
fsq-site/
├── .ddd/                        # ✅ Good - Development docs
├── .claude/                     # ✅ Good - Claude settings
├── public/                      # ✅ Good - Static assets
├── src/
│   ├── components/
│   │   ├── common/             # ✅ Good - Reusable components
│   │   │   ├── Button.tsx
│   │   │   └── FeatureCard.tsx
│   │   ├── layout/             # ✅ Good - Layout components
│   │   │   ├── Header.tsx
│   │   │   └── Footer.tsx
│   │   └── sections/           # ✅ Good - Page sections
│   │       ├── Hero.tsx
│   │       ├── Features.tsx
│   │       └── Impact.tsx
│   ├── pages/                  # ✅ Good - Page components
│   │   └── Home.tsx
│   ├── App.tsx                 # ✅ Good - Root component
│   ├── main.tsx                # ✅ Good - Entry point
│   ├── index.css               # ⚠️  Consider moving to styles/
│   └── App.css                 # ❌ Remove - Not used
├── Dockerfile                   # ✅ Good - Docker setup
├── docker-compose.yml          # ✅ Good - Docker orchestration
├── nginx.conf                  # ✅ Good - nginx config
├── package.json                # ✅ Good
├── tailwind.config.js          # ✅ Good
└── vite.config.ts              # ✅ Good
```

## Assessment

### ✅ What's Good

1. **Clear component organization**
   - `common/` for reusable UI components
   - `layout/` for layout-specific components
   - `sections/` for page-specific sections
   - Good separation of concerns

2. **Simple page structure**
   - `pages/` folder for page components
   - Currently only Home.tsx (appropriate for single-page site)

3. **Docker setup**
   - Well-organized Docker files at root
   - Proper separation with `.dockerignore`

4. **Documentation**
   - `.ddd/` folder for development docs
   - Clear, comprehensive documentation

### ⚠️  Potential Improvements

1. **Missing `assets/` folder**
   ```
   src/assets/
   ├── images/
   ├── icons/
   └── fonts/       # If needed
   ```
   - **Current**: No dedicated place for images/icons
   - **Impact**: Low (no images currently used)
   - **Recommendation**: Create when needed

2. **Global styles location**
   ```
   src/styles/
   ├── index.css           # Main styles
   ├── tailwind.css        # Tailwind imports
   └── variables.css       # CSS variables (if needed)
   ```
   - **Current**: `index.css` at src root
   - **Impact**: Low (only one CSS file)
   - **Recommendation**: Move to `styles/` for consistency

3. **Missing `types/` folder**
   ```
   src/types/
   ├── index.ts            # Common types
   ├── components.ts       # Component prop types
   └── api.ts              # API types (if needed)
   ```
   - **Current**: Types inline with components
   - **Impact**: Low (types are simple and component-specific)
   - **Recommendation**: Add if types become shared

4. **Missing `lib/` or `utils/` folder**
   ```
   src/lib/
   ├── utils.ts            # General utilities
   ├── animations.ts       # Animation helpers
   └── constants.ts        # Constants
   ```
   - **Current**: No utilities needed yet
   - **Impact**: None (no utilities currently)
   - **Recommendation**: Add when utilities are needed

5. **Unused `App.css`**
   - **Current**: File exists but not imported
   - **Impact**: Low (doesn't affect build)
   - **Recommendation**: Remove

### ❌ Issues

1. **Unused `App.css` file**
   - Created by Vite template but not used
   - Should be removed

## Comparison with Best Practices

### Industry Standard Pattern (Feature-based)
```
src/
├── features/           # Feature-based organization
│   ├── home/
│   ├── auth/
│   └── dashboard/
├── shared/             # Shared across features
│   ├── components/
│   ├── hooks/
│   ├── utils/
│   └── types/
├── lib/                # Third-party integrations
└── app/                # App-level components
```

**Assessment**: Overkill for a single-page marketing site

### Component-based Pattern (Current)
```
src/
├── components/         # All components
│   ├── common/
│   ├── layout/
│   └── sections/
├── pages/              # Page compositions
├── assets/             # Static files
└── styles/             # Global styles
```

**Assessment**: ✅ Perfect for current needs

### Atomic Design Pattern
```
src/
├── components/
│   ├── atoms/          # Button, Input
│   ├── molecules/      # SearchBar
│   ├── organisms/      # Header, Footer
│   ├── templates/      # Page layouts
│   └── pages/          # Full pages
```

**Assessment**: Too rigid for simple site

## Recommendations

### Priority 1: Remove Unused Files
- [ ] Delete `src/App.css`

### Priority 2: Optional Improvements (When Needed)

**Add assets folder:**
```bash
mkdir -p src/assets/images src/assets/icons
```

**Reorganize styles:**
```bash
mkdir -p src/styles
mv src/index.css src/styles/
```

**Add types folder:**
```bash
mkdir -p src/types
# Move shared types here
```

**Add lib folder:**
```bash
mkdir -p src/lib
# Add utilities, constants, helpers
```

### Priority 3: Alternative Structure (If site grows)

If the site expands beyond a single landing page:

```
src/
├── app/                    # App configuration
│   ├── App.tsx
│   ├── router.tsx
│   └── providers.tsx
├── features/               # Feature modules
│   ├── home/
│   │   ├── components/
│   │   └── Home.tsx
│   ├── docs/
│   │   ├── components/
│   │   └── Docs.tsx
│   └── about/
│       ├── components/
│       └── About.tsx
├── shared/                 # Shared resources
│   ├── components/
│   │   ├── ui/            # UI components (Button, etc.)
│   │   └── layout/        # Layout components
│   ├── hooks/             # Custom hooks
│   ├── utils/             # Utilities
│   ├── types/             # TypeScript types
│   └── constants/         # Constants
├── assets/                # Static assets
│   ├── images/
│   └── icons/
└── styles/                # Global styles
    └── index.css
```

## Verdict

### Current Structure: ✅ **Appropriate**

**Reasons:**
1. **Right size for scope**: Single-page marketing site doesn't need complex organization
2. **Clear separation**: Components are well-organized (common/layout/sections)
3. **Easy to navigate**: Anyone can understand the structure immediately
4. **Easy to scale**: Can add folders as needed without restructuring

**Don't over-engineer**: The current structure is clean and maintainable. Adding more folders now would be premature optimization.

## When to Refactor

Consider restructuring when:
1. **Multiple pages**: More than 3-4 distinct pages
2. **Shared utilities**: 3+ utility functions used across components
3. **Complex state**: Need for state management (Context, Redux, etc.)
4. **API integration**: Backend API calls requiring organized services
5. **Shared types**: Types used across multiple components
6. **Team growth**: More than 2 developers working on codebase

## Conclusion

**Recommendation**: Keep current structure with one small cleanup:
- Remove `src/App.css` (unused)

Everything else is appropriate for the current scope. Apply the "You Aren't Gonna Need It" (YAGNI) principle - add complexity only when actually needed.

The current structure is:
- ✅ Simple
- ✅ Clear
- ✅ Maintainable
- ✅ Scalable
- ✅ Industry-standard for small-to-medium sites

**No major changes needed.**
