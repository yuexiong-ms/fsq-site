# Docker Deployment Guide

## Overview

The FSQ site is packaged as a multi-stage Docker image that:
1. Builds the React application using Node.js and pnpm
2. Serves the static files using nginx
3. Includes health checks and security headers
4. Is optimized for production use

## Files

### Dockerfile
Multi-stage build that creates a production-ready image:
- **Stage 1 (builder)**: Builds the application with pnpm
- **Stage 2**: Serves with nginx alpine (minimal size)

### .dockerignore
Excludes unnecessary files from the Docker build context to speed up builds.

### nginx.conf
Custom nginx configuration with:
- Gzip compression
- Security headers
- Static asset caching (1 year)
- SPA fallback routing
- Health check endpoint

### docker-compose.yml
Docker Compose configuration for easy deployment.

## Quick Start

### Build the Image

```bash
docker build -t fsq-site:latest .
```

### Run with Docker

```bash
# Run on port 8080
docker run -d -p 8080:80 --name fsq-site fsq-site:latest

# Visit http://localhost:8080
```

### Run with Docker Compose

```bash
# Start the service
docker-compose up -d

# Stop the service
docker-compose down

# View logs
docker-compose logs -f

# Rebuild and restart
docker-compose up -d --build
```

## Image Details

### Size
- Base nginx:alpine image: ~16MB
- Built application: ~350KB (gzipped)
- Total image size: ~50MB

### Ports
- Container exposes port 80
- Map to any host port (e.g., 8080:80)

### Health Check
- Endpoint: http://localhost/health
- Returns: "healthy"
- Interval: 30s
- Timeout: 3s
- Start period: 5s
- Retries: 3

## Production Deployment

### Environment Variables
No environment variables are required. The application is built at image creation time.

### Recommended Docker Run Command

```bash
docker run -d \
  --name fsq-site \
  --restart unless-stopped \
  -p 80:80 \
  fsq-site:latest
```

### Behind a Reverse Proxy

If running behind a reverse proxy (nginx, Traefik, etc.):

```bash
docker run -d \
  --name fsq-site \
  --restart unless-stopped \
  -p 127.0.0.1:8080:80 \
  fsq-site:latest
```

Then configure your reverse proxy to forward to port 8080.

### Kubernetes Deployment

Example Kubernetes deployment:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: fsq-site
spec:
  replicas: 3
  selector:
    matchLabels:
      app: fsq-site
  template:
    metadata:
      labels:
        app: fsq-site
    spec:
      containers:
      - name: fsq-site
        image: fsq-site:latest
        ports:
        - containerPort: 80
        livenessProbe:
          httpGet:
            path: /health
            port: 80
          initialDelaySeconds: 5
          periodSeconds: 30
        readinessProbe:
          httpGet:
            path: /health
            port: 80
          initialDelaySeconds: 5
          periodSeconds: 10
---
apiVersion: v1
kind: Service
metadata:
  name: fsq-site
spec:
  selector:
    app: fsq-site
  ports:
  - port: 80
    targetPort: 80
  type: LoadBalancer
```

## Security Features

### Headers
The nginx configuration includes these security headers:
- `X-Frame-Options: SAMEORIGIN` - Prevents clickjacking
- `X-Content-Type-Options: nosniff` - Prevents MIME sniffing
- `X-XSS-Protection: 1; mode=block` - Enables XSS protection
- `Referrer-Policy: no-referrer-when-downgrade` - Controls referrer info

### Hidden Files
Access to hidden files (starting with `.`) is denied.

### Non-root Process
nginx runs as a non-root user inside the container.

## Performance Optimizations

### Caching
Static assets (JS, CSS, images, fonts) are cached for 1 year with immutable cache control headers.

### Compression
Gzip compression is enabled for:
- text/plain
- text/css
- text/xml
- text/javascript
- application/javascript
- application/x-javascript
- application/xml+rss
- application/json

### Build Optimizations
- Multi-stage build keeps final image small
- Only production dependencies are included
- Build artifacts are optimized by Vite

## CI/CD Integration

### GitHub Actions Example

```yaml
name: Build and Push Docker Image

on:
  push:
    branches: [ main ]
    tags: [ 'v*' ]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3

      - name: Set up Docker Buildx
        uses: docker/setup-buildx-action@v2

      - name: Login to Docker Hub
        uses: docker/login-action@v2
        with:
          username: ${{ secrets.DOCKER_USERNAME }}
          password: ${{ secrets.DOCKER_PASSWORD }}

      - name: Extract metadata
        id: meta
        uses: docker/metadata-action@v4
        with:
          images: your-username/fsq-site

      - name: Build and push
        uses: docker/build-push-action@v4
        with:
          context: .
          push: true
          tags: ${{ steps.meta.outputs.tags }}
          labels: ${{ steps.meta.outputs.labels }}
          cache-from: type=gha
          cache-to: type=gha,mode=max
```

## Troubleshooting

### Container won't start
Check logs:
```bash
docker logs fsq-site
```

### Health check failing
Test manually:
```bash
curl http://localhost:8080/health
```

### Port already in use
Change the host port:
```bash
docker run -d -p 8081:80 --name fsq-site fsq-site:latest
```

### Rebuild from scratch
```bash
docker build --no-cache -t fsq-site:latest .
```

### View container stats
```bash
docker stats fsq-site
```

## Development vs Production

### Development
Use the development server:
```bash
pnpm dev
```

### Production
Use Docker for production deployment:
```bash
docker-compose up -d
```

## Cleanup

### Remove containers
```bash
docker stop fsq-site
docker rm fsq-site
```

### Remove images
```bash
docker rmi fsq-site:latest
```

### Clean up all
```bash
docker-compose down --volumes --rmi all
```

## Registry Push

### Tag for Registry
```bash
docker tag fsq-site:latest your-registry.com/fsq-site:latest
docker tag fsq-site:latest your-registry.com/fsq-site:1.0.0
```

### Push to Registry
```bash
docker push your-registry.com/fsq-site:latest
docker push your-registry.com/fsq-site:1.0.0
```

## Best Practices

1. **Versioning**: Always tag images with version numbers
2. **Health Checks**: Monitor the `/health` endpoint
3. **Logging**: Use `docker logs` or centralized logging
4. **Updates**: Rebuild images when dependencies or code changes
5. **Security**: Regularly update base images for security patches
6. **Resources**: Set memory and CPU limits in production
7. **Backups**: Not needed - static site, rebuild from source

## Monitoring

### Container Health
```bash
docker inspect --format='{{.State.Health.Status}}' fsq-site
```

### Resource Usage
```bash
docker stats fsq-site --no-stream
```

### Logs
```bash
# Follow logs
docker logs -f fsq-site

# Last 100 lines
docker logs --tail 100 fsq-site

# Since timestamp
docker logs --since 2024-01-01T00:00:00 fsq-site
```
