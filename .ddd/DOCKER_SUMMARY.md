# Docker Deployment - Summary

## Quick Commands

### Build
```bash
docker build -t fsq-site:latest .
```

### Run
```bash
# Simple run
docker run -d -p 8080:80 --name fsq-site fsq-site:latest

# With restart policy
docker run -d -p 8080:80 --name fsq-site --restart unless-stopped fsq-site:latest

# Using docker-compose
docker-compose up -d
```

### Test
```bash
# Test health endpoint
curl http://localhost:8080/health

# View site
open http://localhost:8080
```

### Manage
```bash
# View logs
docker logs -f fsq-site

# Stop container
docker stop fsq-site

# Remove container
docker rm fsq-site

# View stats
docker stats fsq-site
```

## What's Included

- **Dockerfile**: Multi-stage build (Node 20 + nginx alpine)
- **.dockerignore**: Optimized build context
- **nginx.conf**: Production-ready configuration
- **docker-compose.yml**: Easy orchestration

## Key Features

✅ Multi-stage build (keeps image small)
✅ Production optimizations (gzip, caching)
✅ Security headers (XSS, clickjacking protection)
✅ Health check endpoint (/health)
✅ Static asset caching (1 year)
✅ SPA fallback routing
✅ Image size: ~50MB
✅ Build time: ~6 seconds (cached layers)

## Files Modified

To support Docker, these source files were updated:
- `src/components/common/Button.tsx` - Fixed type import
- `src/components/common/FeatureCard.tsx` - Fixed type import

## Documentation

- Full guide: `.ddd/DOCKER.md`
- Project plan: `.ddd/PROJECT_PLAN.md`
- Main README: `README.md`
