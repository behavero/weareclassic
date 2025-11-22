#!/bin/bash

# Video Optimization Script for We Are Classic
# This will compress your 1.1GB video to ~3MB

echo "🎬 Starting video optimization..."
echo ""

cd /Users/martin/We_Are_Classic/public/videos

# Check if FFmpeg is installed
if ! command -v ffmpeg &> /dev/null; then
    echo "❌ FFmpeg is not installed."
    echo "Install it with: brew install ffmpeg"
    exit 1
fi

echo "✅ FFmpeg found!"
echo ""

# Create optimized MP4
echo "📹 Creating optimized MP4 (this may take 2-5 minutes)..."
ffmpeg -i hero-background.mov \
  -c:v libx264 \
  -preset slow \
  -crf 28 \
  -vf "scale=1920:-2" \
  -movflags +faststart \
  -an \
  -y \
  hero-background.mp4

echo ""
echo "✅ MP4 created!"
echo ""

# Create WebM version
echo "📹 Creating WebM version (better compression)..."
ffmpeg -i hero-background.mov \
  -c:v libvpx-vp9 \
  -crf 35 \
  -b:v 0 \
  -vf "scale=1920:-2" \
  -an \
  -y \
  hero-background.webm

echo ""
echo "✅ WebM created!"
echo ""

# Create poster image
echo "📸 Creating poster image..."
mkdir -p ../images/hero
ffmpeg -i hero-background.mov \
  -ss 00:00:01 \
  -vframes 1 \
  -vf "scale=1920:-2" \
  -y \
  ../images/hero/video-poster.jpg

echo ""
echo "✅ Poster image created!"
echo ""

# Show file sizes
echo "📊 File size comparison:"
echo "────────────────────────────────────────"
ls -lh hero-background.mov | awk '{print "Original MOV:  " $5}'
ls -lh hero-background.mp4 | awk '{print "Optimized MP4: " $5}'
ls -lh hero-background.webm | awk '{print "Optimized WebM:" $5}'
echo "────────────────────────────────────────"
echo ""

echo "🎉 Video optimization complete!"
echo ""
echo "Next steps:"
echo "1. Test the video: npm run dev"
echo "2. Check http://localhost:3000"
echo "3. If it works, delete the original: rm hero-background.mov"

