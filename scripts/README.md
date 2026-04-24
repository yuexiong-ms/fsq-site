# Build Scripts

Two simple scripts for different purposes:

## 1. Local Debug - `debug.sh`

**Purpose**: Build Docker image for local development

**Image**: `fsd-site:latest` (local only)

**Platform**: Builds for your current platform (M1 ARM64 or x86_64)

**Usage**:
```bash
# Build image
./scripts/debug.sh
```

**When to use**: Local development and testing

**What it does**:
1. Builds `fsd-site:latest` for current platform

---

## 2. Release - `release.sh`

**Purpose**: Build static site for GitHub Pages production deployment

**Output**: Static files in `./dist/` directory

**Usage**:
```bash
./scripts/release.sh
```

**When to use**: Production build for GitHub Pages deployment

**What it does**:
1. Installs dependencies with pnpm
2. Builds static site to `./dist/` directory

---

## Quick Reference

| Task | Command | Output | Purpose |
|------|---------|--------|---------|
| Local dev | `./scripts/debug.sh` | `fsd-site:latest` Docker image | Local testing |
| Production | `./scripts/release.sh` | `./dist/` static files | GitHub Pages deployment |

---

## Workflow

### Development Workflow
```bash
# 1. Build locally with Docker
./scripts/debug.sh

# 2. Run with docker
docker run -d -p 8080:80 fsd-site:latest

# 3. Test at http://localhost:8080
```

### Deployment Workflow
```bash
# 1. Build static files
./scripts/release.sh

# 2. Deployment happens automatically via GitHub Actions
# when changes are pushed to main branch

# 3. Site deploys to https://yuexiong-ms.github.io/fsq-site/
```

---

## Troubleshooting

### Build fails during pnpm install

**Cause**: Node.js or pnpm version mismatch

**Solution**: 
```bash
# Install correct Node.js version (18+)
# Install pnpm: npm install -g pnpm
```

### Docker run fails

**Cause**: Image not built yet

**Solution**: Run `./scripts/debug.sh` first to build the image

### Static files missing after build

**Cause**: Build script failed

**Solution**: Check build output for errors, ensure dependencies are installed
