# We Are Classic - NGO Landing Page

A beautiful, bilingual (EN/RO) landing page for the "We Are Classic" NGO, built with Next.js, TypeScript, Tailwind CSS, and Firebase.

## 🎯 Live Site

**Production:** https://weareclassic.web.app  
**GitHub:** https://github.com/behavero/weareclassic.git  
**Firebase Console:** https://console.firebase.google.com/project/weareclassic

---

## 🎨 Project Overview

**Primary Goal**: Attract Corporate Sponsors (CSR Managers) and Professional Artists/Orchestra Directors.

**Critical CTA**: "Contact Us" form for direct engagement.

**Secondary Goal**: Capture email addresses through newsletter subscription.

---

## 🛠️ Technology Stack

- **Framework**: Next.js 14 (React 18) - Static Export
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS with custom design system
- **Internationalization**: react-i18next (EN/RO support)
- **Database**: Firebase Firestore
- **Authentication**: Firebase Auth (Anonymous)
- **Hosting**: Firebase Hosting
- **Analytics**: Firebase Analytics

---

## 🎨 Design System

### Color Palette
- **Black**: `#121212` - Main text, headlines
- **White**: `#FFFCFB` - Backgrounds, contrast
- **Blue** (Primary): `#154363` - Primary CTAs, accents
- **Orange** (Secondary): `#e2a347` - Secondary CTAs, highlights
- **Beige**: `#ffeccb` - Alternating backgrounds

### Typography
- **Headlines**: GFS Didot (serif) - Classical, elegant
- **Body**: Inter (sans-serif) - Modern, readable
- **Display Sizes**: XL (8rem) → SM (3rem)

---

## 📦 Quick Start

### Installation

```bash
# Clone the repository
git clone https://github.com/behavero/weareclassic.git
cd weareclassic

# Install dependencies
npm install
```

### Environment Setup

Create `.env.local` file:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyCVoM1Jt3L0TMJwExwa0kUP7V2mLTrQGTg
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=weareclassic.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=weareclassic
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=weareclassic.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=18533404668
NEXT_PUBLIC_FIREBASE_APP_ID=1:18533404668:web:0676332a50f8fcdd282c79
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-QDCJP1HTG0
```

### Development

```bash
# Run development server
npm run dev

# Open http://localhost:3000
```

### Production Build

```bash
# Build static site
npm run build

# Output will be in /out folder
```

### Deployment

```bash
# Deploy to Firebase Hosting
npm run deploy

# Or step by step:
npm run build
firebase deploy
```

---

## 📁 Project Structure

```
/src
├── /components
│   ├── /layout          # Header, Footer, LanguageSwitcher
│   ├── /ui              # Button, Input (reusable components)
│   └── /sections        # Hero, Mission, Concerts, Partners, etc.
├── /lib
│   ├── /firebase        # Firebase config & services
│   └── /i18n            # Translation configuration
├── /pages               # Next.js pages (index, contact)
├── /styles              # Global CSS with Tailwind
└── /types               # TypeScript interfaces

/public
├── /videos              # Hero video and concert highlights
├── /images              # Logos, concerts, community, sponsors
└── favicon.ico

/config files
├── firebase.json        # Firebase Hosting config
├── .firebaserc          # Firebase project config
├── firestore.rules      # Database security rules
├── tailwind.config.ts   # Tailwind customization
└── next.config.js       # Next.js configuration
```

---

## 🌐 Website Sections

1. **Hero** - Full-screen video background with oversized headline
2. **Mission** - Organization mission with 3 core values
3. **Future Concerts** - Upcoming concerts with booking integration
4. **Previous Concerts** - Gallery of past performances
5. **Community Concerts** - Kindergarten & elderly home programs
6. **Partners & Sponsors** - Multi-tier sponsor showcase
7. **Newsletter** - Email subscription with Firestore integration

---

## 🔥 Firebase Configuration

### Services Used
- **Firestore Database** - Newsletter subscriptions & contact forms
- **Authentication** - Anonymous auth for form submissions
- **Hosting** - Static site hosting with CDN
- **Analytics** - User behavior tracking

### Security Rules
Located in `firestore.rules`:
- Newsletter subscriptions: Authenticated users can create
- Contact submissions: Authenticated users can create, only admins can read
- All other operations: Denied

---

## 🌍 Internationalization

### Supported Languages
- English (EN) - Default
- Romanian (RO)

### Translation Files
- `src/lib/i18n/locales/en.json` - English translations
- `src/lib/i18n/locales/ro.json` - Romanian translations

### Adding Translations
1. Add keys to both `en.json` and `ro.json`
2. Use in components: `const { t } = useTranslation();`
3. Reference: `{t('section.key')}`

---

## 🎬 Media Files

### Required Files
- `/public/images/logo.svg` - Main logo (header)
- `/public/images/logo-white.svg` - White logo (footer)
- `/public/videos/hero-background.mov` - Hero video (or .mp4)

### Optional Files
- Concert images in `/public/images/concerts/`
- Community photos in `/public/images/community/`
- Sponsor logos in `/public/images/sponsors/`
- Video poster in `/public/images/hero/video-poster.jpg`

---

## 📝 Content Management

### Update Future Concerts
Edit `src/components/sections/FutureConcerts.tsx`:
```typescript
const upcomingConcerts: Concert[] = [
  {
    title: "Your Concert Title",
    date: "March 15, 2025",
    venue: "Venue Name",
    bookingUrl: "https://your-booking-platform.com/...",
    // ... more fields
  }
];
```

### Update Sponsors
Edit `src/components/sections/PartnersSponsors.tsx`:
```typescript
const partners: Partner[] = [
  {
    name: "Sponsor Name",
    logo: "/images/sponsors/logo.svg",
    type: "platinum", // or gold, silver, partner
    website: "https://sponsor-website.com"
  }
];
```

---

## 🚀 Deployment Workflow

### First Time Setup
1. Install Firebase CLI: `npm install -g firebase-tools`
2. Login: `firebase login`
3. Enable Firestore & Authentication in Firebase Console
4. Build: `npm run build`
5. Deploy: `firebase deploy`

### Regular Updates
```bash
# Make your changes
# Test locally
npm run dev

# Build and deploy
npm run deploy

# Push to GitHub
git add .
git commit -m "Update: description"
git push
```

---

## 🔍 Testing

### Local Testing
```bash
npm run dev
```
Test checklist:
- [ ] Video plays on hero section
- [ ] Language switching works (EN ⟷ RO)
- [ ] Newsletter subscription submits to Firestore
- [ ] All navigation links work
- [ ] Mobile responsive design
- [ ] All images load

### Production Testing
After deployment, test at https://weareclassic.web.app:
- [ ] Same checklist as local
- [ ] Check Firebase Analytics
- [ ] Verify Firestore data
- [ ] Test on multiple devices/browsers

---

## 📊 Analytics & Monitoring

### Firebase Analytics
- Automatically tracks page views
- Custom events for newsletter subscriptions
- Concert booking button clicks

### Console Links
- **Analytics Dashboard**: https://console.firebase.google.com/project/weareclassic/analytics
- **Firestore Database**: https://console.firebase.google.com/project/weareclassic/firestore
- **Hosting Dashboard**: https://console.firebase.google.com/project/weareclassic/hosting

---

## 🐛 Troubleshooting

### Build Errors
```bash
rm -rf .next out node_modules
npm install
npm run build
```

### Firebase Auth Errors
- Ensure Anonymous auth is enabled in Firebase Console
- Check `.env.local` has correct credentials
- Verify Firestore rules are deployed

### Deployment Issues
```bash
firebase logout
firebase login
firebase use weareclassic
firebase deploy
```

### Video Not Playing
- Convert .mov to .mp4: `ffmpeg -i input.mov -vcodec h264 output.mp4`
- Add poster image as fallback
- Test on different browsers

---

## 📚 Documentation

| File | Purpose |
|------|---------|
| `README.md` | This file - project overview |
| `DEPLOYMENT_GUIDE.md` | Complete deployment instructions |
| `FIREBASE_SETUP.md` | Firebase configuration details |
| `MEDIA_GUIDE.md` | Media file organization |
| `LAUNCH_CHECKLIST.md` | Pre-launch checklist |
| `UPDATED_STRUCTURE.md` | Website structure & components |

---

## 🤝 Contributing

This is a private project for We Are Classic NGO. For changes:

1. Create a feature branch
2. Make your changes
3. Test locally
4. Submit for review
5. Deploy after approval

---

## 📄 License

© 2025 We Are Classic. All rights reserved.

---

## 🎻 Support

For technical issues:
- Check documentation in project root
- Review Firebase Console for errors
- Check browser DevTools console

For content updates:
- Edit translation files in `src/lib/i18n/locales/`
- Update concert data in section components
- Add media files to `/public/` folders

---

**Built with ❤️ for the classical music community.**

**Live at:** https://weareclassic.web.app
