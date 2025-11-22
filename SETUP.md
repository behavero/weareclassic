# We Are Classic - Setup Guide

This guide will walk you through setting up and running the We Are Classic landing page locally.

## ✅ Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v18.0.0 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**
- **Git** (optional, for version control)
- A **Firebase account** - [Sign up here](https://firebase.google.com/)

## 🚀 Quick Start (5 Minutes)

### Step 1: Install Dependencies

Open your terminal in the project directory and run:

```bash
npm install
```

This will install all required packages including Next.js, React, Tailwind CSS, Firebase, and i18next.

### Step 2: Firebase Configuration (Optional for MVP)

The application works without Firebase for development, but to enable newsletter subscriptions, you'll need to configure Firebase.

#### Option A: Use Global Variables (Production)

Add this script to your HTML `<head>` (typically in production):

```html
<script>
  window.__firebase_config = {
    apiKey: "your-api-key",
    authDomain: "your-project.firebaseapp.com",
    projectId: "your-project-id",
    storageBucket: "your-project.appspot.com",
    messagingSenderId: "your-sender-id",
    appId: "your-app-id"
  };
  window.__initial_auth_token = "your-custom-token";
</script>
```

#### Option B: Use Environment Variables (Development)

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

**Get Firebase Credentials:**
1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Create a new project or select existing one
3. Click the gear icon → Project settings
4. Scroll to "Your apps" and copy the configuration

### Step 3: Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. You should see the landing page!

## 🎬 Adding Your Video

To add a video to the Hero section:

1. Upload your video to YouTube or Vimeo
2. Open `src/components/sections/Hero.tsx`
3. Find the comment `<!-- Placeholder for video embed -->`
4. Replace with your video embed code

**YouTube Example:**
```tsx
<iframe
  src="https://www.youtube.com/embed/YOUR_VIDEO_ID?autoplay=1&mute=1&loop=1&controls=0&showinfo=0&rel=0&modestbranding=1&playlist=YOUR_VIDEO_ID"
  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
  allow="autoplay; encrypted-media"
  allowFullScreen
/>
```

**Vimeo Example:**
```tsx
<iframe
  src="https://player.vimeo.com/video/YOUR_VIDEO_ID?autoplay=1&loop=1&muted=1&background=1"
  className="absolute inset-0 w-full h-full object-cover pointer-events-none"
  allow="autoplay; fullscreen"
  allowFullScreen
/>
```

## 🌐 Language Switching

The site supports English and Romanian. Click the language switcher in the header to toggle between languages.

To modify translations:
- English: `src/lib/i18n/locales/en.json`
- Romanian: `src/lib/i18n/locales/ro.json`

## 📁 Project Structure Quick Reference

```
We_Are_Classic/
├── src/
│   ├── components/
│   │   ├── layout/          # Header, Footer, LanguageSwitcher
│   │   ├── ui/              # Button, Input (reusable components)
│   │   └── sections/        # Hero, Newsletter (page sections)
│   ├── lib/
│   │   ├── firebase/        # Firebase configuration & functions
│   │   └── i18n/            # Translation configuration
│   ├── pages/               # Next.js pages (routes)
│   ├── styles/              # Global CSS with Tailwind
│   └── types/               # TypeScript type definitions
├── public/                  # Static assets (images, favicon)
├── design.json              # Design system reference
├── package.json             # Dependencies
└── README.md                # Full documentation
```

## 🎨 Customizing the Design

### Colors

Edit `tailwind.config.ts` to change the color palette:

```typescript
colors: {
  primary: {
    DEFAULT: '#1A1A1A',  // Change this
    // ... more colors
  }
}
```

### Typography

Fonts are configured in `src/styles/globals.css`:
- **Headlines**: GFS Didot (serif)
- **Body**: Inter (sans-serif)

To change fonts, update the Google Fonts import URL and the Tailwind config.

### Content

All text content is in the translation files (`src/lib/i18n/locales/`). Update these JSON files to change any text on the site.

## 🔧 Common Tasks

### Adding a New Section

1. Create a component in `src/components/sections/`
2. Import it in `src/pages/index.tsx`
3. Add it to the page layout
4. Update translations in both `en.json` and `ro.json`

### Testing the Contact Form

The contact form is located at `/contact` ([http://localhost:3000/contact](http://localhost:3000/contact)).

Currently, it shows a success message but doesn't submit to Firebase. To enable Firebase submission, implement the logic in `src/pages/contact.tsx` (similar to the Newsletter component).

### Testing Newsletter Subscription

1. Make sure Firebase is configured
2. Scroll to the Newsletter section
3. Enter an email address
4. Click "Subscribe"
5. Check Firebase Console → Firestore → `newsletter_subscriptions` collection

## 📦 Building for Production

When ready to deploy:

```bash
# Build the production version
npm run build

# Test the production build locally
npm start
```

## 🚀 Deployment Options

### Vercel (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables (if using Firebase)
5. Deploy!

### Other Platforms

This is a standard Next.js app and works with:
- Netlify
- AWS Amplify
- Railway
- Render
- Any Node.js hosting

## 🆘 Troubleshooting

### Issue: "Module not found" errors

**Solution:**
```bash
rm -rf node_modules package-lock.json
npm install
```

### Issue: Tailwind styles not applying

**Solution:**
1. Make sure `tailwind.config.ts` has correct paths
2. Restart the dev server (`Ctrl+C`, then `npm run dev`)
3. Clear browser cache

### Issue: Translations not showing

**Solution:**
1. Check that translation keys exist in both `en.json` and `ro.json`
2. Verify the key path (e.g., `t('header.nav.vision')`)
3. Check browser console for errors

### Issue: Firebase errors

**Solution:**
1. Verify Firebase config is correct
2. Check Firebase project settings
3. Ensure Firestore database is created
4. Check authentication is enabled

## 📚 Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React i18next Guide](https://react.i18next.com/)
- [Firebase Documentation](https://firebase.google.com/docs)

## 🤝 Getting Help

If you encounter issues:
1. Check this guide and the main README.md
2. Review the code comments
3. Check the browser console for errors
4. Review the design.json for design specifications

## ✨ Next Steps

After setup, consider:
1. Adding your actual video to the Hero section
2. Configuring Firebase for newsletter subscriptions
3. Customizing colors and fonts to match your brand
4. Adding real content to placeholder sections
5. Setting up analytics (Google Analytics, etc.)
6. Creating Privacy Policy and Terms pages
7. Testing on mobile devices
8. Optimizing images

---

**You're all set! Enjoy building with We Are Classic.** 🎻

