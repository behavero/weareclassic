# 📁 Quick Font Setup Guide

## Where to Place Your Custom Didot Fonts

```
/Users/martin/We_Are_Classic/
└── public/
    └── fonts/                           ← Place your .otf files HERE
        ├── GFSDidot-Regular.otf         ✅ Add this file
        └── GFSDidot-Bold.otf            ✅ Add this file (if you have it)
```

---

## File Naming (IMPORTANT!)

Your font files MUST be named EXACTLY:

✅ **GFSDidot-Regular.otf**  
✅ **GFSDidot-Bold.otf**

If your files have different names, **rename them** to match!

---

## How to Add Them

### Option 1: Drag & Drop (Easiest)
1. Open Finder
2. Navigate to: `/Users/martin/We_Are_Classic/public/fonts/`
3. Drag your `.otf` files into this folder
4. Rename if needed

### Option 2: Terminal
```bash
# Navigate to the fonts directory
cd /Users/martin/We_Are_Classic/public/fonts/

# If your font files are in Downloads, copy them:
cp ~/Downloads/YourDidotFont.otf ./GFSDidot-Regular.otf
cp ~/Downloads/YourDidotBold.otf ./GFSDidot-Bold.otf
```

---

## After Adding Fonts

### 1. Verify Files Exist
```bash
ls -la /Users/martin/We_Are_Classic/public/fonts/
```

**You should see:**
```
GFSDidot-Regular.otf
GFSDidot-Bold.otf
README.md
```

### 2. Test the Website
```bash
cd /Users/martin/We_Are_Classic
npm run dev
```

### 3. Check in Browser
Open **http://localhost:3000**

**Open DevTools (F12) → Console**
- ✅ No font loading errors
- ✅ Headlines use "GFS Didot"
- ✅ Body text uses "Sofia Sans"

**Inspect a Headline:**
```bash
Right-click on a headline → Inspect
Check "Computed" tab → Look for "font-family"
Should show: "GFS Didot, Didot, Georgia, serif"
```

---

## What's Already Configured

### globals.css
```css
@font-face {
  font-family: 'GFS Didot';
  src: url('/fonts/GFSDidot-Regular.otf') format('opentype');
  font-weight: 400;
  font-display: swap;
}

@font-face {
  font-family: 'GFS Didot';
  src: url('/fonts/GFSDidot-Bold.otf') format('opentype');
  font-weight: 700;
  font-display: swap;
}
```

### tailwind.config.ts
```typescript
fontFamily: {
  headline: ['GFS Didot', 'Didot', 'Georgia', 'serif'],
  sans: ['Sofia Sans', 'Inter', 'system-ui', 'sans-serif'],
}
```

---

## Font Usage

### Headlines (Automatic)
All H1, H2, H3 automatically use GFS Didot:
```tsx
<h1>This uses GFS Didot</h1>
<h2>This also uses GFS Didot</h2>
```

### Manual Application
```tsx
<div className="font-headline">GFS Didot text</div>
<div className="font-sans">Sofia Sans text</div>
```

---

## Troubleshooting

### Font Not Loading?

**Check file names exactly match:**
```bash
ls -la /Users/martin/We_Are_Classic/public/fonts/
```

**Check browser console for errors:**
- Open DevTools (F12)
- Look for "Failed to load font" errors

**Common issues:**
- ❌ Wrong file name: `GFSDidot Regular.otf` (has space)
- ✅ Correct: `GFSDidot-Regular.otf` (dash, no space)

- ❌ Wrong location: `src/fonts/`
- ✅ Correct: `public/fonts/`

### Fallback Fonts

If your custom Didot doesn't load, the system will use fallbacks:
1. Didot (system font on macOS)
2. Georgia (common serif font)
3. Default serif

**This is okay for testing!** The fonts are configured correctly.

---

## Sofia Sans (Already Working!)

Sofia Sans loads from Google Fonts automatically. No action needed!

**It's being used for:**
- All body text
- Navigation links
- Button text
- Form inputs
- Footer text

---

## Quick Test Commands

```bash
# Go to project
cd /Users/martin/We_Are_Classic

# Check if fonts exist
ls -la public/fonts/

# Start development server
npm run dev

# Open browser
# Go to: http://localhost:3000
# Check if headlines look different from body text
```

---

## Summary

1. **Add your .otf files** to `/public/fonts/`
2. **Name them exactly:** `GFSDidot-Regular.otf` and `GFSDidot-Bold.otf`
3. **Run:** `npm run dev`
4. **Check:** Headlines should use your custom Didot font!

**That's it!** Everything else is already configured. 🎻✨





