# Build Scripts

Two simple scripts for different purposes:

## 1. Local Debug - `debug.sh`

**Purpose**: Build image for local development

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

**Purpose**: Build image for production and push to Azure Container Registry

**Image**: `steinsz.azurecr.io/fsd-site:latest`

**Platform**: linux/amd64 (x86_64)

**Usage**:
```bash
./scripts/release.sh
```

**When to use**: Production deployment to ACR

**Prerequisites**:
- Must be logged in to ACR: `az acr login --name steinsz`

**What it does**:
1. Builds for linux/amd64
2. Pushes to `steinsz.azurecr.io/fsd-site:latest`

---

## Quick Reference

| Task | Command | Image | Platform |
|------|---------|-------|----------|
| Local dev | `./scripts/debug.sh` | `fsd-site:latest` | Current |
| Production | `./scripts/release.sh` | `steinsz.azurecr.io/fsd-site` | linux/amd64 |

---

## Workflow

### Development Workflow
```bash
# 1. Build locally
./scripts/debug.sh

# 2. Run with docker
docker run -d -p 8080:80 fsd-site:latest

# 3. Test at http://localhost:8080
```

### Release Workflow
```bash
# 1. Login to ACR
az acr login --name steinsz

# 2. Release to ACR
./scripts/release.sh

# 3. Deploy to Kubernetes
kubectl set image deployment/fsd-site \
  fsd-site=steinsz.azurecr.io/fsd-site:latest
```

---

## Troubleshooting

### "exec format error" in production

**Cause**: Image built for ARM64 (M1) running on x86_64 server

**Solution**: Use `./scripts/release.sh` which builds for linux/amd64

### docker run fails

**Cause**: Image not built yet

**Solution**: Run `./scripts/debug.sh` first to build the image

### ACR login fails

**Solution**:
```bash
az login
az acr login --name steinsz
```
