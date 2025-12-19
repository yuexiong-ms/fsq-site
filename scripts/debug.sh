#!/bin/bash

# Local Debug Script for FSQ Site
# Builds image for local development

set -e

IMAGE_NAME="fsd-site"

echo "🏗️  Building ${IMAGE_NAME} for local debug..."

docker build -t ${IMAGE_NAME}:latest .

echo ""
echo "✅ Build complete: ${IMAGE_NAME}:latest"
echo ""
echo "To run:"
echo "  docker run -p 8080:80 ${IMAGE_NAME}:latest"
echo ""
echo "Then visit:"
echo "  http://localhost:8080"
echo ""
