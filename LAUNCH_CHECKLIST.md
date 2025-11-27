# 🚀 We Are Classic - Launch Checklist

Use this checklist to get your website live!

---

## ✅ Phase 1: Essential Setup (Required to Run)

### Media Files
- [ ] Add logo: `/public/images/logo.svg`
- [ ] Add white logo: `/public/images/logo-white.svg` (for footer)
- [ ] Add hero video: `/public/videos/hero-background.mov` (or .mp4)
- [ ] (Optional) Add video poster: `/public/images/hero/video-poster.jpg`

### Firebase Configuration
- [ ] Go to [Firebase Console](https://console.firebase.google.com/project/weareclassic/settings/general)
- [ ] Register a web app (if not done yet)
- [ ] Copy Firebase config credentials
- [ ] Create `.env.local` file in project root
- [ ] Add Firebase credentials to `.env.local` (see `FIREBASE_SETUP.md`)
- [ ] Enable Firestore Database
- [ ] Enable Anonymous Authentication
- [ ] Configure Firestore Security Rules
- [ ] Test newsletter subscription

### Quick Test
```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

**Expected Result:** Homepage loads with all sections, language switcher works, newsletter subscription works.

---

## ✅ Phase 2: Content Population (Before Launch)

### Concert Data

#### Future Concerts (`src/components/sections/FutureConcerts.tsx`)
- [ ] Replace placeholder concert 1 with real data
- [ ] Replace placeholder concert 2 with real data
- [ ] Replace placeholder concert 3 with real data
- [ ] Update booking URLs to your actual booking platform
- [ ] Add concert images to `/public/images/concerts/`
- [ ] Verify dates, times, venues, and prices

#### Previous Concerts (`src/components/sections/PreviousConcerts.tsx`)
- [ ] Replace placeholder past concerts with real data
- [ ] Add past concert images to `/public/images/concerts/`
- [ ] Add concert videos (if available) to `/public/videos/`
- [ ] Update attendee counts

#### Community Concerts (`src/components/sections/CommunityConcerts.tsx`)
- [ ] Update kindergarten program statistics
- [ ] Update elderly program statistics
- [ ] Add community photos to `/public/images/community/`
- [ ] Update venue counts, participants, concert numbers

### Partners & Sponsors

#### Logos (`src/components/sections/PartnersSponsors.tsx`)
- [ ] Add sponsor logos to `/public/images/sponsors/`
- [ ] Add partner logos to `/public/images/partners/`
- [ ] Update sponsor data array with real companies
- [ ] Assign correct tiers (platinum, gold, silver, partner)
- [ ] Add website links for each sponsor

#### Sponsorship Package
- [ ] Create sponsorship package PDF
- [ ] Add to `/public/sponsorship-package.pdf`
- [ ] Verify download link works

### Translation Review
- [ ] Review all English translations in `src/lib/i18n/locales/en.json`
- [ ] Review all Romanian translations in `src/lib/i18n/locales/ro.json`
- [ ] Test language switching on all sections
- [ ] Verify all buttons, forms, and messaging

---

## ✅ Phase 3: Optimization (Recommended)

### Video Optimization
- [ ] Convert .mov to .mp4 (see `MEDIA_GUIDE.md` for FFmpeg command)
- [ ] (Optional) Create .webm version for smaller file size
- [ ] Create poster image (video thumbnail)
- [ ] Test video autoplay on mobile devices

### Image Optimization
- [ ] Compress all images (TinyPNG, ImageOptim, or Squoosh)
- [ ] Ensure images are appropriately sized (don't upload 4000px images)
- [ ] Convert PNGs to JPGs where transparency isn't needed
- [ ] Add `alt` text to all images for accessibility

### Performance
- [ ] Run Lighthouse audit in Chrome DevTools
- [ ] Aim for 90+ score on Performance
- [ ] Fix any accessibility issues
- [ ] Test on slow 3G connection

---

## ✅ Phase 4: Legal & Policies (Before Launch)

### Required Pages
- [ ] Create Privacy Policy page (`/pages/privacy.tsx`)
- [ ] Create Terms of Service page (`/pages/terms.tsx`)
- [ ] Update footer links to point to these pages
- [ ] Ensure GDPR compliance (especially for newsletter)

### Contact Form
- [ ] Implement Firebase submission for contact form
- [ ] Test form validation
- [ ] Set up email notifications for new submissions
- [ ] Add spam protection (reCAPTCHA or similar)

---

## ✅ Phase 5: SEO & Analytics (Pre-Launch)

### SEO Setup
- [ ] Update page titles for all pages
- [ ] Add meta descriptions for all pages
- [ ] Create `robots.txt` file
- [ ] Create `sitemap.xml` file
- [ ] Add Open Graph images for social sharing
- [ ] Test structured data with Google's Rich Results Test

### Analytics
- [ ] Set up Google Analytics 4
- [ ] Add Google Tag Manager (optional)
- [ ] Set up conversion tracking for:
  - Newsletter subscriptions
  - Contact form submissions
  - Booking button clicks
- [ ] Verify tracking is working

### Social Media
- [ ] Update social media links in footer
- [ ] Create social media profiles if not exists
- [ ] Add Open Graph meta tags for beautiful link previews

---

## ✅ Phase 6: Testing (Critical Before Launch)

### Browser Testing
- [ ] Chrome (desktop & mobile)
- [ ] Safari (desktop & mobile)
- [ ] Firefox
- [ ] Edge
- [ ] Test on actual iOS device
- [ ] Test on actual Android device

### Functionality Testing
- [ ] All navigation links work
- [ ] Language switcher works
- [ ] Newsletter subscription works
- [ ] Contact form works
- [ ] All external links open in new tabs
- [ ] All booking links work
- [ ] Video plays on all devices

### Responsive Testing
- [ ] Mobile (375px width)
- [ ] Tablet (768px width)
- [ ] Desktop (1920px width)
- [ ] Check all sections at each breakpoint
- [ ] Test hamburger menu on mobile

### Accessibility Testing
- [ ] Tab through entire page with keyboard
- [ ] Test with screen reader (VoiceOver on Mac, NVDA on Windows)
- [ ] Check color contrast ratios
- [ ] Verify all images have alt text
- [ ] Ensure form labels are properly associated

---

## ✅ Phase 7: Deployment

### Build for Production
```bash
# Build the production version
npm run build

# Test the production build locally
npm start

# Verify everything works
```

### Deploy to Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit - We Are Classic website"
   git branch -M main
   git remote add origin your-repo-url
   git push -u origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Add environment variables (Firebase credentials)
   - Click "Deploy"

3. **Configure Custom Domain**
   - Add your domain in Vercel dashboard
   - Update DNS records at your domain registrar
   - Enable SSL (automatic on Vercel)

### Alternative: Deploy to Netlify

1. **Push to GitHub** (same as above)

2. **Deploy on Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Import your GitHub repository
   - Build command: `npm run build`
   - Publish directory: `.next`
   - Add environment variables

---

## ✅ Phase 8: Post-Launch

### Monitoring
- [ ] Set up uptime monitoring (UptimeRobot, Pingdom)
- [ ] Monitor analytics for the first week
- [ ] Check server logs for errors
- [ ] Monitor Firebase usage/costs

### Marketing
- [ ] Announce launch on social media
- [ ] Email existing contacts
- [ ] Submit to search engines (Google Search Console)
- [ ] Create social media posts with screenshots

### Maintenance Plan
- [ ] Schedule regular content updates (concerts, sponsors)
- [ ] Plan monthly analytics reviews
- [ ] Set up automated backups
- [ ] Create content calendar for news/blog

---

## 🎯 Priority Order

If you need to launch quickly, focus on this order:

### Must Have (Can't launch without):
1. Logo files
2. Hero video
3. Firebase credentials
4. At least 2-3 real concerts (future & past)
5. Privacy Policy & Terms pages

### Should Have (Launch with, update soon):
6. Real community photos
7. Sponsor logos
8. All concert data filled
9. Analytics installed
10. SEO optimization

### Nice to Have (Can add post-launch):
11. Video optimization (webm format)
12. Additional content sections
13. Blog/news section
14. Event calendar
15. Photo gallery

---

## 📞 Need Help?

If you encounter issues:

1. **Check documentation:**
   - `README.md` - Full technical docs
   - `SETUP.md` - Setup guide
   - `FIREBASE_SETUP.md` - Firebase configuration
   - `MEDIA_GUIDE.md` - Media file locations
   - `UPDATED_STRUCTURE.md` - What's been built

2. **Common issues:**
   - Video not playing → Check file format, try MP4
   - Firebase errors → Verify credentials in `.env.local`
   - Build errors → Run `npm install` again
   - Styling issues → Clear browser cache, rebuild

3. **Browser DevTools:**
   - Console tab → Check for JavaScript errors
   - Network tab → Check for failed requests
   - Lighthouse → Check performance/SEO

---

## ✨ Launch Readiness Score

Count your checkmarks!

- **90-100%** = Ready to launch! 🚀
- **75-89%** = Almost there, a few more items
- **50-74%** = Good progress, keep going
- **< 50%** = Focus on Phase 1 & 2 first

---

**Good luck with your launch! 🎻**

Your website is professionally built and ready to showcase the beauty of classical music to the world.

---

*Created: November 22, 2025*






