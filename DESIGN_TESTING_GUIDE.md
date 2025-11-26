# 🧪 Design Testing Guide

**Date:** November 22, 2025  
**Purpose:** Verify the refined high-end, minimalist design

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
cd /Users/martin/We_Are_Classic
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Open in Browser
Navigate to: `http://localhost:3000`

---

## ✅ Visual Checklist

### Hero Section
- [ ] Video background is full-screen (min-height: 100vh)
- [ ] Dark overlay is visible (60% black opacity)
- [ ] Headline is MASSIVE (text-8xl or larger on desktop)
- [ ] Text is **left-aligned**, not centered
- [ ] GFS Didot font is used for the headline
- [ ] Single blue "Contact Us" button is visible
- [ ] Subheadline is clearly readable
- [ ] Video autoplays and loops (if video file exists)

### Header
- [ ] Logo appears in top-left
- [ ] Only 3 navigation items (Mission, Concerts, Partners)
- [ ] "Contact Us" CTA button is blue
- [ ] Header is transparent initially
- [ ] Header becomes white with shadow on scroll
- [ ] Mobile menu icon appears on smaller screens

### Mission Section
- [ ] Background is **beige** (#ffeccb)
- [ ] Title is **left-aligned**
- [ ] Massive spacing above/below section (py-32)
- [ ] Icons are large and prominent
- [ ] GFS Didot used for headlines

### Future Concerts Section
- [ ] Background is **white** (#FFFCFB)
- [ ] Title is **left-aligned**
- [ ] Concert cards are displayed in a grid
- [ ] "Book Tickets" buttons are blue
- [ ] "View All Concerts" link is left-aligned

### Previous Concerts Section
- [ ] Background is **beige** (#ffeccb) - alternating!
- [ ] Title is **left-aligned**
- [ ] Grid layout for concert gallery
- [ ] "View Full Gallery" link is left-aligned

### Community Concerts Section
- [ ] Background is **white** (#FFFCFB)
- [ ] Title is **left-aligned**
- [ ] Impact statistics are visible
- [ ] CTA link is left-aligned

### Partners & Sponsors Section
- [ ] Background is **beige** (#ffeccb)
- [ ] Title is **left-aligned**
- [ ] Tier headers (Platinum, Gold, Silver) are left-aligned
- [ ] Logo grid is organized by tier
- [ ] "Become a Sponsor" CTA is prominent

### Newsletter Section
- [ ] Background is **blue** (#154363)
- [ ] Text is **white**
- [ ] 2-column layout (text + form)
- [ ] Title is large and impactful
- [ ] Input field has transparent white background
- [ ] Subscribe button is orange (secondary color)

### Footer
- [ ] Background is **black** (#121212)
- [ ] Text is white
- [ ] Section headers are uppercase, small, tracked
- [ ] Social icons are visible
- [ ] Copyright text is subtle (white/50)
- [ ] Massive spacing (py-24)

---

## 📏 Spacing Audit

### Vertical Spacing Between Sections
Use browser DevTools to inspect section padding:

- **Mission:** Should have `py-32` or `py-40`
- **Future Concerts:** Should have `py-32` or `py-40`
- **Previous Concerts:** Should have `py-32` or `py-40`
- **Community Concerts:** Should have `py-32` or `py-40`
- **Partners:** Should have `py-32` or `py-40`
- **Newsletter:** Should have `py-24` or `py-32` (smaller)
- **Footer:** Should have `py-20` or `py-24`

**Expected Result:** The page should feel very spacious and airy, not cramped.

---

## 🎨 Color Verification

### Background Pattern (Top to Bottom)
1. **Hero:** Black/Dark with video
2. **Mission:** Beige (#ffeccb)
3. **Future Concerts:** White (#FFFCFB)
4. **Previous Concerts:** Beige (#ffeccb)
5. **Community Concerts:** White (#FFFCFB)
6. **Partners:** Beige (#ffeccb)
7. **Newsletter:** Blue (#154363)
8. **Footer:** Black (#121212)

**Expected Result:** Alternating rhythm of white and beige, bookended by dark sections.

---

## 🔤 Typography Verification

### Open DevTools and Check Font Families

#### Headlines (H1, H2, H3)
- **Font Family:** `GFS Didot, Georgia, serif`
- **Font Weight:** 600 (semibold)
- **Example Elements:** 
  - Hero headline
  - Section titles
  - Card titles

#### Body Text
- **Font Family:** `Inter, system-ui, -apple-system, sans-serif`
- **Font Weight:** 400 (normal), 500 (medium), or 600 (semibold)
- **Example Elements:**
  - Navigation links
  - Body paragraphs
  - Button text
  - Form labels

### Font Size Verification

| Element | Desktop Size | Mobile Size |
|---------|-------------|-------------|
| Hero Headline | text-8xl to text-9xl | text-6xl |
| Section Titles | text-6xl to text-7xl | text-5xl |
| Subtitles | text-xl to text-2xl | text-lg to text-xl |
| Body Text | text-base to text-lg | text-sm to text-base |

---

## 📱 Responsive Testing

### Test Breakpoints

1. **Mobile (375px - iPhone SE)**
   - [ ] Hero text is still readable
   - [ ] Sections stack vertically
   - [ ] Mobile menu appears
   - [ ] CTA buttons are full-width on mobile

2. **Tablet (768px - iPad)**
   - [ ] Grid layouts show 2 columns
   - [ ] Spacing is generous
   - [ ] Navigation is still visible

3. **Desktop (1440px - MacBook Pro)**
   - [ ] Hero fills screen
   - [ ] Max-width container centers content
   - [ ] All text is left-aligned within container
   - [ ] Grids show 3-4 columns

4. **Large Desktop (1920px+)**
   - [ ] Content doesn't stretch too wide (max-w-7xl)
   - [ ] Proportions remain balanced

---

## 🎯 Alignment Check

### Quick Test: Vertical Line Method

1. Open DevTools
2. Add a red vertical line at the left edge of the container:
   ```css
   .container-custom::before {
     content: '';
     position: absolute;
     left: 64px; /* lg:px-16 */
     top: 0;
     bottom: 0;
     width: 2px;
     background: red;
     z-index: 9999;
   }
   ```
3. **Expected Result:** All section titles, subtitles, and content blocks should align to this red line (not centered).

---

## 🔘 Button & CTA Verification

### Primary Buttons (Blue)
- [ ] Background: #154363
- [ ] Text: White
- [ ] Padding: px-10 py-5 (large) or px-8 py-3.5 (medium)
- [ ] Hover: Darker blue + shadow
- [ ] Font: Inter

### Secondary Buttons (Orange)
- [ ] Background: #e2a347
- [ ] Text: Black
- [ ] Padding: Same as primary
- [ ] Hover: Darker orange + shadow
- [ ] Font: Inter

### Text Links
- [ ] Color: Blue (#154363)
- [ ] Hover: Remain blue or darken slightly
- [ ] Underline: None by default
- [ ] Font: Inter

---

## 🌐 Language Switching

### Test Both Languages

1. Click the language switcher in the header
2. Switch between **EN** and **RO**
3. **Verify:**
   - [ ] All text changes appropriately
   - [ ] Layout doesn't break
   - [ ] Font sizes remain consistent
   - [ ] No missing translations

---

## 🖼️ Media Assets Check

### Currently Missing (Expected Placeholders)

- [ ] `/videos/hero-background.mp4` (Hero video)
- [ ] `/videos/hero-background.webm` (Hero video fallback)
- [ ] `/images/hero/video-poster.jpg` (Hero fallback image)
- [ ] `/images/logo.svg` (Color logo)
- [ ] `/images/logo-white.svg` (White logo for footer)
- [ ] Concert images for Previous Concerts section
- [ ] Sponsor logos for Partners section

**Note:** Placeholders should be visible with "Coming Soon" or similar text.

---

## 🧰 Browser DevTools Inspection

### Use Chrome DevTools to Verify:

1. **Elements Tab:**
   - Check that classes are applied correctly
   - Verify Tailwind utility classes (e.g., `py-32`, `text-8xl`)
   - Inspect background colors

2. **Computed Tab:**
   - Verify actual font families
   - Check computed padding/margin values
   - Confirm color hex codes

3. **Network Tab:**
   - Ensure fonts load from Google Fonts
   - Check for any 404 errors on media files

4. **Console Tab:**
   - No React errors or warnings
   - No Firebase connection issues (okay if .env.local not set)

---

## 🎨 Before & After Comparison

### Take Screenshots and Compare

**Before (Generic Design):**
- Centered text
- Small headlines
- Cramped sections
- Monotone backgrounds

**After (Refined Design):**
- Left-aligned text
- Massive headlines
- Spacious sections
- Alternating backgrounds

---

## 🐛 Common Issues & Fixes

### Issue: Fonts Not Loading
**Solution:** Check that `globals.css` imports Google Fonts:
```css
@import url('https://fonts.googleapis.com/css2?family=GFS+Didot&family=Inter:wght@300;400;500;600;700&display=swap');
```

### Issue: Sections Are Centered
**Solution:** Verify that `content-left` class is applied to section headers

### Issue: Spacing Is Too Small
**Solution:** Check that `section-spacing` class uses `py-32` or higher

### Issue: Colors Are Wrong
**Solution:** Verify `tailwind.config.ts` has correct hex codes

### Issue: Video Doesn't Play
**Solution:** 
1. Check video file exists in `/public/videos/`
2. Verify video formats are supported
3. Ensure `autoPlay`, `loop`, `muted`, `playsInline` attributes are set

---

## 📊 Performance Testing

### Run Lighthouse Audit

1. Open DevTools > Lighthouse tab
2. Select "Desktop" or "Mobile"
3. Run audit
4. **Target Scores:**
   - Performance: 90+
   - Accessibility: 95+
   - Best Practices: 95+
   - SEO: 95+

---

## ✨ Final Visual Check

### Overall Impression

The website should feel:
- [ ] **Elegant** - Sophisticated and refined
- [ ] **Spacious** - Lots of breathing room
- [ ] **Professional** - Editorial magazine quality
- [ ] **Minimal** - Clean, distraction-free
- [ ] **Impactful** - Bold headlines, clear CTAs
- [ ] **Classical** - Timeless, not trendy

**Does it match the high-end minimalist aesthetic?** Yes / No

---

## 🚀 Next Actions

After visual confirmation:

1. **Add Real Content:**
   - Replace placeholder concert data
   - Add actual sponsor logos
   - Upload hero video
   - Add concert images

2. **Test Functionality:**
   - Newsletter form submission
   - Contact form (if implemented)
   - Booking platform integration
   - Social media links

3. **Deploy to Staging:**
   ```bash
   npm run build
   firebase deploy
   ```

4. **User Acceptance Testing:**
   - Share staging link with stakeholders
   - Gather feedback
   - Iterate if needed

---

**Testing Complete?** ✅

Ready for content integration and deployment!




