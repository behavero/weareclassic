# 🚀 We Are Classic - Complete Deployment Guide

Your Firebase credentials are configured and ready! Follow these steps to deploy your website.

---

## ✅ Step 1: Create Environment File

Create a `.env.local` file in your project root with your **real Firebase credentials**:

```bash
# Create the file
cat > .env.local << 'EOF'
# Firebase Configuration - We Are Classic
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyCVoM1Jt3L0TMJwExwa0kUP7V2mLTrQGTg
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=weareclassic.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=weareclassic
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=weareclassic.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=18533404668
NEXT_PUBLIC_FIREBASE_APP_ID=1:18533404668:web:0676332a50f8fcdd282c79
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-QDCJP1HTG0
EOF
```

---

## ✅ Step 2: Enable Firebase Services

### A. Enable Firestore Database

1. Go to [Firestore Database](https://console.firebase.google.com/project/weareclassic/firestore)
2. Click **"Create database"**
3. Choose **"Start in production mode"** (we have security rules ready)
4. Select region: **eur3 (Europe)** for Romania
5. Click **"Enable"**

### B. Enable Authentication

1. Go to [Authentication](https://console.firebase.google.com/project/weareclassic/authentication)
2. Click **"Get started"**
3. Enable **"Anonymous"** authentication
4. Click **"Save"**

### C. Deploy Security Rules

The Firestore security rules are already in `firestore.rules`. They'll be deployed automatically when you run `firebase deploy`.

---

## ✅ Step 3: Install Firebase CLI

```bash
# Install Firebase CLI globally
npm install -g firebase-tools

# Verify installation
firebase --version
```

---

## ✅ Step 4: Login to Firebase

```bash
# Login to your Google account
firebase login

# This will open your browser for authentication
# Use the account associated with your Firebase project
```

---

## ✅ Step 5: Initialize Firebase (Already Done!)

Your project is already configured with:
- ✅ `.firebaserc` - Points to your project (weareclassic)
- ✅ `firebase.json` - Hosting & Firestore configuration
- ✅ `firestore.rules` - Security rules
- ✅ `firestore.indexes.json` - Database indexes

---

## ✅ Step 6: Test Locally

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
# Test newsletter subscription to verify Firebase connection
```

---

## ✅ Step 7: Build for Production

```bash
# Build the static site
npm run build

# This creates an 'out' folder with your static site
```

**Expected Output:**
```
✓ Generating static pages
✓ Collecting page data
✓ Finalizing page optimization

Route (pages)                              Size     First Load JS
┌ ○ /                                     5.2 kB         85.3 kB
├ ○ /404                                  194 B          80.3 kB
└ ○ /contact                              3.1 kB         83.2 kB
```

---

## ✅ Step 8: Deploy to Firebase Hosting

```bash
# Deploy everything (hosting + firestore rules)
firebase deploy

# OR deploy only hosting
firebase deploy --only hosting

# OR deploy only firestore rules
firebase deploy --only firestore
```

**Expected Output:**
```
=== Deploying to 'weareclassic'...

i  deploying firestore, hosting
i  firestore: checking firestore.rules for compilation errors...
✔  firestore: rules file firestore.rules compiled successfully
i  hosting[weareclassic]: beginning deploy...
i  hosting[weareclassic]: found 45 files in out
✔  hosting[weareclassic]: file upload complete
i  hosting[weareclassic]: finalizing version...
✔  hosting[weareclassic]: version finalized
i  hosting[weareclassic]: releasing new version...
✔  hosting[weareclassic]: release complete

✔  Deploy complete!

Project Console: https://console.firebase.google.com/project/weareclassic/overview
Hosting URL: https://weareclassic.web.app
```

---

## 🌐 Your Live URLs

After deployment, your site will be available at:

- **Primary:** https://weareclassic.web.app
- **Alternative:** https://weareclassic.firebaseapp.com

---

## ✅ Step 9: Push to GitHub

Your GitHub repo: https://github.com/behavero/weareclassic.git

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit - We Are Classic website"

# Add remote (your repo)
git remote add origin https://github.com/behavero/weareclassic.git

# Push to GitHub
git branch -M main
git push -u origin main
```

---

## 🔧 Custom Domain Setup (Optional)

To use your own domain (e.g., weareclassic.ro):

### 1. Add Custom Domain in Firebase

1. Go to [Hosting](https://console.firebase.google.com/project/weareclassic/hosting)
2. Click **"Add custom domain"**
3. Enter your domain: `weareclassic.ro`
4. Follow the verification steps

### 2. Update DNS Records

Add these records at your domain registrar:

```
Type    Name    Value
A       @       199.36.158.100
A       @       199.36.158.101
TXT     @       [verification-code-from-firebase]
```

For www subdomain:
```
Type    Name    Value
CNAME   www     weareclassic.web.app
```

### 3. Wait for SSL Certificate

Firebase automatically provisions an SSL certificate. This can take up to 24 hours.

---

## 🔄 Update & Redeploy Workflow

When you make changes:

```bash
# 1. Make your changes
# 2. Test locally
npm run dev

# 3. Build
npm run build

# 4. Deploy
firebase deploy

# 5. Push to GitHub
git add .
git commit -m "Update: description of changes"
git push
```

**Quick deploy command:**
```bash
npm run deploy  # Builds and deploys in one command
```

---

## 📊 Monitor Your Site

### Firebase Console
- **Hosting Dashboard:** https://console.firebase.google.com/project/weareclassic/hosting
- **Firestore Database:** https://console.firebase.google.com/project/weareclassic/firestore
- **Analytics:** https://console.firebase.google.com/project/weareclassic/analytics
- **Authentication:** https://console.firebase.google.com/project/weareclassic/authentication

### Check Newsletter Subscriptions

1. Go to [Firestore Database](https://console.firebase.google.com/project/weareclassic/firestore/data)
2. Look for `newsletter_subscriptions` collection
3. Each document represents a subscription

---

## 🐛 Troubleshooting

### "Permission denied" when deploying

```bash
# Re-login to Firebase
firebase logout
firebase login
```

### "Project not found"

```bash
# List your projects
firebase projects:list

# Switch to correct project
firebase use weareclassic
```

### Build fails

```bash
# Clear cache and rebuild
rm -rf .next out node_modules
npm install
npm run build
```

### Changes not showing after deploy

```bash
# Clear hosting cache
firebase hosting:channel:deploy preview --expires 1h

# Or wait 5-10 minutes for CDN cache to update
# Or hard refresh browser (Cmd+Shift+R on Mac, Ctrl+Shift+R on Windows)
```

### Newsletter subscription not working

1. Verify Anonymous auth is enabled
2. Check Firestore rules are deployed
3. Check browser console for errors
4. Verify `.env.local` has correct credentials

---

## 📋 Deployment Checklist

Before deploying:

- [ ] `.env.local` file created with Firebase credentials
- [ ] Logo files added to `/public/images/`
- [ ] Hero video added to `/public/videos/`
- [ ] Firebase CLI installed (`npm install -g firebase-tools`)
- [ ] Logged into Firebase (`firebase login`)
- [ ] Firestore database enabled
- [ ] Anonymous authentication enabled
- [ ] Tested locally (`npm run dev`)
- [ ] Build succeeds (`npm run build`)
- [ ] All concert data updated
- [ ] Translations reviewed

After first deployment:

- [ ] Test live site at https://weareclassic.web.app
- [ ] Test newsletter subscription
- [ ] Test language switching
- [ ] Test on mobile devices
- [ ] Check all images load
- [ ] Verify video plays
- [ ] Test all links
- [ ] Check Firestore for newsletter data

---

## 🚀 Quick Reference Commands

```bash
# Install dependencies
npm install

# Run locally
npm run dev

# Build for production
npm run build

# Deploy to Firebase
firebase deploy

# Deploy only hosting
firebase deploy --only hosting

# Deploy only Firestore rules
firebase deploy --only firestore

# Build and deploy in one command
npm run deploy

# View deployment logs
firebase hosting:channel:list

# Rollback to previous deployment
firebase hosting:rollback
```

---

## 📚 Useful Links

- **Your Firebase Console:** https://console.firebase.google.com/project/weareclassic
- **Live Site (after deploy):** https://weareclassic.web.app
- **GitHub Repo:** https://github.com/behavero/weareclassic.git
- **Firebase Hosting Docs:** https://firebase.google.com/docs/hosting
- **Next.js Static Export:** https://nextjs.org/docs/app/building-your-application/deploying/static-exports

---

## 🎉 You're Ready to Deploy!

Your website is fully configured and ready for deployment. Just follow the steps above and your site will be live at **https://weareclassic.web.app**!

**Remember:** Every time you make changes, run `npm run deploy` to update the live site.

---

**Need help?** Check the troubleshooting section or Firebase documentation.

**Good luck with your launch!** 🎻

