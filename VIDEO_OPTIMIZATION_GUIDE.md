# 🎬 Video Optimization Guide

**Current Issue:** Your hero video is **1.1GB** - way too large for web use!  
**Target:** Under **5MB** for optimal web performance  
**Recommended:** 2-3MB for background videos

---

## 🎯 Quick Solution (Recommended)

### Option 1: Use FFmpeg (Command Line - Best Quality)

**Install FFmpeg:**
```bash
# macOS
brew install ffmpeg

# Verify installation
ffmpeg -version
```

**Optimize your video:**
```bash
cd /Users/martin/We_Are_Classic/public/videos

# Create optimized MP4 (2-pass encoding for best quality)
ffmpeg -i hero-background.mov \
  -c:v libx264 \
  -preset slow \
  -crf 28 \
  -vf "scale=1920:-2" \
  -movflags +faststart \
  -an \
  hero-background-optimized.mp4

# Create WebM version (better compression)
ffmpeg -i hero-background.mov \
  -c:v libvpx-vp9 \
  -crf 35 \
  -b:v 0 \
  -vf "scale=1920:-2" \
  -an \
  hero-background-optimized.webm
```

**Parameters Explained:**
- `-crf 28`: Compression quality (23-28 is good for background videos)
- `-preset slow`: Better compression (takes longer)
- `-vf "scale=1920:-2"`: Resize to 1920px width (Full HD)
- `-movflags +faststart`: Optimize for web streaming
- `-an`: Remove audio (not needed for background video)

**Expected Result:** 2-4MB files (from 1.1GB!)

---

## Option 2: HandBrake (GUI - Easiest)

**Download:** https://handbrake.fr/downloads.php

**Settings:**
1. Open HandBrake
2. **Source:** Select your `hero-background.mov`
3. **Preset:** Choose "Web" > "Gmail Large 3 Minutes 720p30"
4. **Dimensions:**
   - Width: 1920
   - Height: 1080 (or auto)
5. **Video:**
   - Codec: H.264
   - Quality: Constant Quality ~26-28
   - Framerate: 30 fps
6. **Audio:** Remove audio track
7. **Start Encode**

**Expected Result:** 3-5MB file

---

## Option 3: CloudConvert (Online - No Installation)

**Website:** https://cloudconvert.com/mov-to-mp4

**Steps:**
1. Upload `hero-background.mov`
2. Convert to: **MP4**
3. Click "Options" and set:
   - Video Codec: H.264
   - Quality: 70-80%
   - Resolution: 1920x1080
   - Remove Audio: Yes
4. Convert and download

**Limitation:** Free tier may have file size limits

---

## 🎥 Video Specifications for Web

### Background Hero Videos

| Property | Recommended | Why |
|----------|-------------|-----|
| **Format** | MP4 (H.264) + WebM (VP9) | Browser compatibility |
| **Resolution** | 1920x1080 (Full HD) | Balance quality/size |
| **Frame Rate** | 24-30 fps | Smooth playback |
| **Bitrate** | 1-2 Mbps | Good quality, small file |
| **File Size** | 2-5 MB | Fast loading |
| **Audio** | Remove | Not needed, saves space |
| **Duration** | 5-15 seconds (loop) | Optimal loop |

### Mobile Considerations
For even better performance, create a mobile version:

```bash
# Mobile-optimized version (720p)
ffmpeg -i hero-background.mov \
  -c:v libx264 \
  -preset slow \
  -crf 30 \
  -vf "scale=1280:-2" \
  -movflags +faststart \
  -an \
  hero-background-mobile.mp4
```

**Mobile file target:** Under 2MB

---

## 🚀 Advanced: Multiple Formats for Browser Support

Create all three formats for maximum compatibility:

```bash
cd /Users/martin/We_Are_Classic/public/videos

# MP4 (H.264) - Best compatibility
ffmpeg -i hero-background.mov \
  -c:v libx264 -preset slow -crf 28 \
  -vf "scale=1920:-2" -movflags +faststart -an \
  hero-background.mp4

# WebM (VP9) - Best compression
ffmpeg -i hero-background.mov \
  -c:v libvpx-vp9 -crf 35 -b:v 0 \
  -vf "scale=1920:-2" -an \
  hero-background.webm

# Poster image (fallback)
ffmpeg -i hero-background.mov \
  -ss 00:00:01 -vframes 1 \
  -vf "scale=1920:-2" \
  ../images/hero/video-poster.jpg
```

**Result:**
- `hero-background.mp4` (~3MB) - Safari, older browsers
- `hero-background.webm` (~2MB) - Chrome, Firefox, Edge
- `video-poster.jpg` (~200KB) - Loading placeholder

---

## 🔧 After Optimization: Update Code

Once you have the optimized videos, the Hero component is already configured to use them!

**Current Hero.tsx setup:**
```tsx
<video autoPlay loop muted playsInline>
  <source src="/videos/hero-background.mp4" type="video/mp4" />
  <source src="/videos/hero-background.webm" type="video/webm" />
  <source src="/videos/hero-background.mov" type="video/quicktime" />
</video>
```

**The browser will automatically:**
1. Try MP4 first (best compatibility)
2. Fall back to WebM if MP4 not supported
3. Fall back to MOV as last resort
4. Show fallback gradient if no video plays

---

## 📊 Compression Comparison

| Format | Original | Optimized | Savings |
|--------|----------|-----------|---------|
| MOV (current) | 1.1 GB | - | - |
| MP4 (H.264, CRF 28) | - | ~3 MB | 99.7% ✅ |
| WebM (VP9, CRF 35) | - | ~2 MB | 99.8% ✅ |
| Mobile MP4 (720p) | - | ~1.5 MB | 99.9% ✅ |

---

## ✅ Step-by-Step Action Plan

### 1. Install FFmpeg (Recommended)
```bash
brew install ffmpeg
```

### 2. Navigate to Videos Folder
```bash
cd /Users/martin/We_Are_Classic/public/videos
```

### 3. Run Optimization Commands
```bash
# Desktop MP4
ffmpeg -i hero-background.mov \
  -c:v libx264 -preset slow -crf 28 \
  -vf "scale=1920:-2" -movflags +faststart -an \
  hero-background.mp4

# Desktop WebM
ffmpeg -i hero-background.mov \
  -c:v libvpx-vp9 -crf 35 -b:v 0 \
  -vf "scale=1920:-2" -an \
  hero-background.webm

# Poster image
ffmpeg -i hero-background.mov \
  -ss 00:00:01 -vframes 1 \
  -vf "scale=1920:-2" \
  ../images/hero/video-poster.jpg
```

### 4. Verify File Sizes
```bash
ls -lh
```

**Expected output:**
```
hero-background.mov       1.1G  (original - can delete after)
hero-background.mp4       3.0M  (optimized)
hero-background.webm      2.0M  (optimized)
```

### 5. Test in Browser
```bash
cd /Users/martin/We_Are_Classic
npm run dev
```

Open `http://localhost:3000` and verify:
- Video loads quickly (under 3 seconds)
- Video autoplays smoothly
- No lag or stuttering
- Video loops seamlessly

### 6. Optional: Delete Original
```bash
# After confirming optimized videos work
rm hero-background.mov
```

---

## 🎬 Video Best Practices

### Do's ✅
- Keep duration 5-15 seconds
- Remove audio track
- Use H.264 codec for MP4
- Add `poster` attribute for loading state
- Use `preload="auto"` for hero videos
- Optimize for mobile separately

### Don'ts ❌
- Don't use videos over 10MB
- Don't include audio (wastes bandwidth)
- Don't use high frame rates (30fps max)
- Don't skip poster images
- Don't use only one format (support WebM + MP4)

---

## 🐛 Troubleshooting

### Video Doesn't Autoplay
**Solution:** Ensure `muted` attribute is set (browsers block unmuted autoplay)

### Video Quality Is Poor
**Solution:** Decrease CRF value (28 → 25 for better quality, slightly larger file)

### File Still Too Large
**Solution:** Reduce resolution or increase CRF:
```bash
# 720p version
ffmpeg -i hero-background.mov \
  -c:v libx264 -preset slow -crf 30 \
  -vf "scale=1280:-2" -movflags +faststart -an \
  hero-background-720p.mp4
```

### FFmpeg Not Found
**Solution:** Install via Homebrew:
```bash
brew install ffmpeg
```

---

## 📈 Performance Impact

**Before Optimization:**
- File size: 1.1GB
- Load time: 30+ seconds on fast connection
- Mobile: Unusable

**After Optimization:**
- File size: 2-3MB
- Load time: 1-2 seconds
- Mobile: Smooth playback
- Lighthouse score: 90+ ✅

---

## 🎯 Quick Reference Commands

**Basic optimization (use this!):**
```bash
cd /Users/martin/We_Are_Classic/public/videos
ffmpeg -i hero-background.mov -c:v libx264 -preset slow -crf 28 -vf "scale=1920:-2" -movflags +faststart -an hero-background.mp4
```

**Check file size:**
```bash
ls -lh hero-background.*
```

**Test video info:**
```bash
ffmpeg -i hero-background.mp4
```

---

## ✨ Next Steps

1. **Install FFmpeg** (if not already installed)
2. **Run the optimization command**
3. **Verify file size is under 5MB**
4. **Create poster image directory:**
   ```bash
   mkdir -p /Users/martin/We_Are_Classic/public/images/hero
   ```
5. **Test in browser** (`npm run dev`)
6. **Celebrate!** 🎉

Your video will load 200x faster!



