#!/bin/bash

# Trim first 2 seconds from both video files

echo "🎬 Trimming first 2 seconds from videos..."
echo ""

cd /Users/martin/We_Are_Classic/public/videos

# Backup original files
echo "📦 Creating backups..."
cp hero-background.mp4 hero-background-original.mp4
cp hero-background.webm hero-background-original.webm
echo "✅ Backups created"
echo ""

# Trim MP4 (skip first 2 seconds)
echo "✂️  Trimming MP4..."
ffmpeg -i hero-background-original.mp4 \
  -ss 00:00:02 \
  -c:v libx264 \
  -preset slow \
  -crf 28 \
  -movflags +faststart \
  -an \
  -y \
  hero-background.mp4

echo ""
echo "✅ MP4 trimmed!"
echo ""

# Trim WebM (skip first 2 seconds)
echo "✂️  Trimming WebM..."
ffmpeg -i hero-background-original.webm \
  -ss 00:00:02 \
  -c:v libvpx-vp9 \
  -crf 35 \
  -b:v 0 \
  -an \
  -y \
  hero-background.webm

echo ""
echo "✅ WebM trimmed!"
echo ""

# Update poster image from new trimmed video
echo "📸 Updating poster image..."
ffmpeg -i hero-background.mp4 \
  -ss 00:00:00.5 \
  -vframes 1 \
  -vf "scale=1920:-2" \
  -q:v 2 \
  -y \
  ../images/hero/video-poster.jpg

echo ""
echo "✅ Poster image updated!"
echo ""

# Show file sizes
echo "📊 New file sizes:"
echo "────────────────────────────────────────"
ls -lh hero-background.mp4 | awk '{print "MP4:  " $5}'
ls -lh hero-background.webm | awk '{print "WebM: " $5}'
echo "────────────────────────────────────────"
echo ""

echo "🎉 Videos trimmed successfully!"
echo ""
echo "Original files saved as:"
echo "  - hero-background-original.mp4"
echo "  - hero-background-original.webm"
echo ""
echo "Next steps:"
echo "1. Test the videos: npm run dev"
echo "2. If good, delete originals: rm hero-background-original.*"

