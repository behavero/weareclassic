# Media Files Guide - We Are Classic

## 📁 Folder Structure for Media

All static media files (videos, images, documents) should be placed in the `/public` folder. Files in this folder are served directly by Next.js.

```
/public
├── favicon.ico              # Site favicon
├── /videos                  # All video files
│   ├── hero-background.mov  # ← Your Hero section video goes here
│   ├── orchestra-performance.mov
│   └── youth-program.mov
├── /images                  # All image files
│   ├── /hero               # Hero section images
│   ├── /programs           # Program photos
│   ├── /testimonials       # Testimonial photos
│   ├── /gallery            # Photo gallery
│   └── /logos              # Partner/sponsor logos
└── /documents              # PDFs, downloadables (optional)
```

---

## 🎬 Adding Your Videos

### Step 1: Copy Your Videos to the Project

Copy your `.mov` files to the `/public/videos/` folder:

```bash
# From your terminal
cp /path/to/your/hero-video.mov /Users/martin/We_Are_Classic/public/videos/hero-background.mov
cp /path/to/your/second-video.mov /Users/martin/We_Are_Classic/public/videos/secondary-video.mov
```

### Step 2: Reference Videos in Your Code

Videos in `/public` are accessible from the root URL path:

**Example: Hero Background Video**

The video at `/public/videos/hero-background.mov` is accessible as `/videos/hero-background.mov`

---

## 🎥 Using the Hero Background Video

### Current Implementation (Placeholder)

Right now, the Hero section has a gradient placeholder. Here's how to replace it with your video:

**File:** `src/components/sections/Hero.tsx`

Replace the placeholder div with:

```tsx
{/* Video Background */}
<div className="absolute inset-0 w-full h-full">
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover"
  >
    <source src="/videos/hero-background.mov" type="video/quicktime" />
    <source src="/videos/hero-background.mp4" type="video/mp4" />
    {/* Fallback for browsers that don't support video */}
    Your browser does not support the video tag.
  </video>
</div>
```

### Video Format Recommendations

For best browser compatibility, convert your `.mov` files to multiple formats:

1. **MP4 (H.264)** - Best browser support
2. **WebM** - Smaller file size, good for modern browsers
3. **MOV** - Original format (works on Safari/Apple devices)

**Conversion using FFmpeg** (if you have it installed):

```bash
# Install FFmpeg first (macOS)
brew install ffmpeg

# Convert MOV to MP4
ffmpeg -i hero-background.mov -vcodec h264 -acodec aac hero-background.mp4

# Convert MOV to WebM (smaller file size)
ffmpeg -i hero-background.mov -c:v libvpx-vp9 -crf 30 -b:v 0 hero-background.webm
```

Then reference multiple formats:

```tsx
<video autoPlay loop muted playsInline className="...">
  <source src="/videos/hero-background.webm" type="video/webm" />
  <source src="/videos/hero-background.mp4" type="video/mp4" />
  <source src="/videos/hero-background.mov" type="video/quicktime" />
</video>
```

---

## 📸 Adding Images

### Next.js Image Component (Recommended)

For images, use Next.js's optimized `Image` component:

```tsx
import Image from 'next/image';

<Image
  src="/images/programs/youth-orchestra.jpg"
  alt="Youth orchestra performance"
  width={800}
  height={600}
  className="rounded-lg shadow-lg"
/>
```

**Benefits:**
- Automatic optimization
- Lazy loading
- Responsive images
- WebP conversion

### Standard img Tag (Simple)

For simple cases:

```tsx
<img
  src="/images/testimonials/maria-popescu.jpg"
  alt="Maria Popescu, Parent"
  className="rounded-full w-24 h-24"
/>
```

---

## 📂 Recommended Folder Organization

```
/public/videos/
  hero-background.mov (or .mp4)
  hero-background.webm (optimized version)
  about-us-intro.mp4
  orchestra-performance.mp4
  youth-program-highlights.mp4

/public/images/
  /hero/
    hero-fallback.jpg (backup if video fails to load)
  
  /programs/
    youth-orchestra-1.jpg
    youth-orchestra-2.jpg
    educational-outreach.jpg
    artist-residency.jpg
    community-concert.jpg
  
  /testimonials/
    maria-popescu.jpg
    alexandru-ionescu.jpg
    elena-dumitrescu.jpg
  
  /impact/
    students-playing.jpg
    concert-audience.jpg
    instrument-donation.jpg
  
  /gallery/ (for future photo gallery)
    event-2024-01.jpg
    event-2024-02.jpg
  
  /logos/
    sponsor-logo-1.png
    sponsor-logo-2.png
    partner-logo-1.svg
  
  /icons/
    music-note.svg
    education.svg
    excellence.svg

/public/documents/ (optional)
  annual-report-2024.pdf
  sponsorship-package.pdf
```

---

## ⚡ Performance Best Practices

### Video Optimization

1. **Compress videos** before adding them:
   - Keep hero background video under 10MB if possible
   - Use 1080p max resolution for background videos
   - Use 30fps or less for background videos

2. **Lazy load non-critical videos**:
   ```tsx
   <video preload="none" ...>
   ```

3. **Provide a poster image** (thumbnail):
   ```tsx
   <video poster="/images/hero/video-poster.jpg" ...>
   ```

### Image Optimization

1. **Use appropriate formats**:
   - JPG for photos
   - PNG for graphics with transparency
   - SVG for logos and icons
   - WebP for modern browsers (Next.js handles this automatically)

2. **Optimize before uploading**:
   - Use tools like [TinyPNG](https://tinypng.com/)
   - Or ImageOptim (macOS)
   - Or Squoosh (web-based)

3. **Use correct dimensions**:
   - Don't upload 4000px images if you only display 800px
   - Resize images to the maximum size they'll be displayed

---

## 🎯 Quick Reference: File Paths

| File Location | URL Path | Usage |
|--------------|----------|-------|
| `/public/videos/hero-background.mov` | `/videos/hero-background.mov` | Hero background video |
| `/public/images/programs/youth.jpg` | `/images/programs/youth.jpg` | Program section photo |
| `/public/favicon.ico` | `/favicon.ico` | Site favicon |
| `/public/documents/report.pdf` | `/documents/report.pdf` | Downloadable PDF |

**Important:** Never include `/public` in the URL path. Next.js serves files from `/public` directly from the root `/`.

---

## 🔄 Adding Your Videos Now

**Quick Steps:**

1. **Create the videos folder** (if not exists):
   ```bash
   mkdir -p /Users/martin/We_Are_Classic/public/videos
   ```

2. **Copy your videos**:
   ```bash
   # Replace with your actual video paths
   cp ~/Downloads/hero-video.mov /Users/martin/We_Are_Classic/public/videos/hero-background.mov
   cp ~/Downloads/second-video.mov /Users/martin/We_Are_Classic/public/videos/secondary-video.mov
   ```

3. **Update Hero component** to use local video (see example above)

4. **Restart dev server** if it's running:
   ```bash
   # Press Ctrl+C to stop, then:
   npm run dev
   ```

---

## 📝 Notes

- **Git Considerations**: Large video files (>10MB) should be added to `.gitignore` if using Git. Consider using Git LFS or hosting videos externally (Vimeo, YouTube) for version control.
  
- **File Size Warning**: The `.mov` format can be very large. Consider converting to MP4 for better web performance.

- **CDN for Production**: For production, consider hosting large videos on a CDN (like Cloudflare, AWS S3 + CloudFront) to improve loading times.

---

## ✅ Checklist

- [ ] Create `/public/videos/` folder
- [ ] Copy hero background video
- [ ] Copy secondary video
- [ ] (Optional) Convert to MP4/WebM for compatibility
- [ ] Update Hero component to use video
- [ ] Create `/public/images/` subfolders as needed
- [ ] Test video playback in browser
- [ ] Verify video autoplay works (must be muted)

---

**Need help with video conversion or optimization? Let me know!**




