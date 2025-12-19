#!/bin/bash

# Release Script for FSQ Site
# Builds image for linux/amd64 and pushes to steinsz.azurecr.io

set -e

# Configuration
ACR_REGISTRY="steinsz.azurecr.io"
IMAGE_NAME="fsd-site"
FULL_IMAGE="${ACR_REGISTRY}/${IMAGE_NAME}"

echo "🚀 Building image for ${FULL_IMAGE}"
echo ""
echo "Platform: linux/amd64"
echo ""

# Build and push
echo "🏗️  Building and pushing..."
echo ""
docker buildx build \
    --platform linux/amd64 \
    --tag ${FULL_IMAGE}:latest \
    --push \
    .

echo ""
echo "✅ Build complete!"
echo ""
echo "Image pushed:"
echo "  ${FULL_IMAGE}:latest"
echo ""
