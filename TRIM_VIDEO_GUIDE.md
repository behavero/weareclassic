# ✂️ Trim First 2 Seconds from Hero Video

**Issue:** First 2 seconds of video are black, looks like nothing is loading  
**Solution:** Trim the first 2 seconds from both video files

---

## 🎬 Videos Being Used

Your Hero section uses **both** of these files:

1. **`hero-background.webm`** (27MB)
   - Used by: Chrome, Firefox, Edge
   - Primary video source

2. **`hero-background.mp4`** (18MB)
   - Used by: Safari, older browsers
   - Fallback video source

**You need to trim BOTH files!**

---

## 🚀 Quick Solution - Run This Script

I've created an automated script that will:
1. ✅ Backup your original videos
2. ✅ Trim first 2 seconds from both MP4 and WebM
3. ✅ Update the poster image
4. ✅ Show you the new file sizes

### Run the script:

```bash
cd /Users/martin/We_Are_Classic
bash trim-video.sh
```

**Time:** 2-3 minutes  
**Result:** Videos will start from second 2 instead of second 0

---

## 🔧 Manual Method (If You Prefer)

If you want to do it manually:

```bash
cd /Users/martin/We_Are_Classic/public/videos

# Backup originals first
cp hero-background.mp4 hero-background-original.mp4
cp hero-background.webm hero-background-original.webm

# Trim MP4 (skip first 2 seconds)
ffmpeg -i hero-background-original.mp4 \
  -ss 00:00:02 \
  -c:v libx264 -preset slow -crf 28 \
  -movflags +faststart -an \
  hero-background.mp4 -y

# Trim WebM (skip first 2 seconds)
ffmpeg -i hero-background-original.webm \
  -ss 00:00:02 \
  -c:v libvpx-vp9 -crf 35 -b:v 0 -an \
  hero-background.webm -y

# Update poster image
ffmpeg -i hero-background.mp4 \
  -ss 00:00:00.5 -vframes 1 \
  -vf "scale=1920:-2" -q:v 2 \
  ../images/hero/video-poster.jpg -y
```

---

## 🎯 What `-ss 00:00:02` Does

- `-ss 00:00:02` = Start from 2 seconds into the video
- This skips the black intro
- Video will now start immediately with content

### Adjust if needed:

```bash
# Skip 3 seconds instead:
-ss 00:00:03

# Skip 1.5 seconds:
-ss 00:00:01.5

# Skip 2.5 seconds:
-ss 00:00:02.5
```

---

## ✅ After Trimming

### 1. Test the Videos

```bash
npm run dev
```

Open http://localhost:3000

**Check:**
- [ ] Video starts immediately (no black screen)
- [ ] Video plays smoothly
- [ ] Video loops correctly
- [ ] Both Chrome and Safari work

### 2. Verify File Sizes

```bash
ls -lh /Users/martin/We_Are_Classic/public/videos/
```

**Should show:**
- hero-background.mp4 (~16-17MB, slightly smaller)
- hero-background.webm (~25-26MB, slightly smaller)
- hero-background-original.mp4 (backup)
- hero-background-original.webm (backup)

### 3. Delete Backups (Optional)

Once you confirm the trimmed videos work:

```bash
cd /Users/martin/We_Are_Classic/public/videos
rm hero-background-original.mp4
rm hero-background-original.webm
```

---

## 🐛 Troubleshooting

### Video Doesn't Play After Trimming

**Check the trim worked:**
```bash
ffmpeg -i hero-background.mp4
# Look for "Duration:" - should be ~2 seconds shorter
```

### Video Quality Degraded

**Use higher quality settings:**
```bash
# For MP4, use lower CRF (better quality):
-crf 25  # instead of 28

# For WebM, use lower CRF:
-crf 30  # instead of 35
```

### Want to Trim a Different Amount

```bash
# Trim first 3 seconds:
-ss 00:00:03

# Trim first 1 second:
-ss 00:00:01

# Trim first 0.5 seconds:
-ss 00:00:00.5
```

---

## 📊 Expected Results

### Before Trimming
```
0:00 - 0:02  →  Black screen (looks broken)
0:02 - 1:34  →  Actual content
```

### After Trimming
```
0:00 - 1:32  →  Immediate content (no black screen!)
```

**Users see content instantly!** ✨

---

## 💡 Pro Tip: Poster Image

The script also updates your poster image to show a frame from the trimmed video (0.5 seconds in), so users see content even before the video loads!

---

## 🎯 Summary

**Run this one command:**
```bash
bash trim-video.sh
```

**Result:**
- ✅ Both videos trimmed (MP4 + WebM)
- ✅ No black screen at start
- ✅ Instant content for users
- ✅ Original files backed up
- ✅ Poster image updated

---

**Ready to trim?**
```bash
cd /Users/martin/We_Are_Classic
bash trim-video.sh
```

Then test with `npm run dev`! 🎬✨

