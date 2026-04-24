#!/bin/bash

# Build Script for FSQ Site
# Builds static site for GitHub Pages deployment

set -e

echo "🚀 Building FSQ Site for GitHub Pages"
echo ""

# Install dependencies
echo "📦 Installing dependencies..."
pnpm install --frozen-lockfile

# Build static site
echo "🏗️  Building static site..."
pnpm run build

echo ""
echo "✅ Build complete!"
echo ""
echo "Static files generated in ./dist/"
echo "Ready for GitHub Pages deployment"
echo ""
