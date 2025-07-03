#!/bin/bash

# ReactionBay Deployment Script
# This script builds and deploys the Next.js application to Hetzner server

echo "🚀 Starting ReactionBay deployment..."

# Build the application
echo "📦 Building the application..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed!"
    exit 1
fi

echo "✅ Build completed successfully!"

# Create deployment package
echo "📁 Creating deployment package..."
tar -czf reactionbay-deploy.tar.gz \
    .next \
    public \
    package.json \
    package-lock.json \
    next.config.ts \
    tsconfig.json \
    deploy.sh \
    README.md

echo "✅ Deployment package created: reactionbay-deploy.tar.gz"

echo ""
echo "📋 Next steps:"
echo "1. Upload reactionbay-deploy.tar.gz to your Hetzner server"
echo "2. Extract the package on the server"
echo "3. Run: npm install --production"
echo "4. Start the application: npm start"
echo ""
echo "🌐 Your domains should point to: 95.217.131.27"
echo "   - reactionbay.com (English)"
echo "   - reactionbay.de (German)" 