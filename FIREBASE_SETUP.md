# Firebase Setup Guide - We Are Classic

Your Firebase project is already created! Here's how to connect it to your website.

## 📋 Your Firebase Project Details

**Project Name:** weareclassic  
**Project ID:** weareclassic  
**Project Number:** 18533404668  
**Console URL:** https://console.firebase.google.com/project/weareclassic/settings/general

---

## 🔧 Step 1: Get Your Firebase Configuration

1. Go to your [Firebase Console](https://console.firebase.google.com/project/weareclassic/settings/general)
2. Scroll down to "Your apps" section
3. If you haven't added a web app yet, click "Add app" and select the web icon (`</>`  )
4. Register your app with a nickname (e.g., "We Are Classic Website")
5. Copy the `firebaseConfig` object that appears

It will look something like this:

```javascript
const firebaseConfig = {
  apiKey: "AIza...",
  authDomain: "weareclassic.firebaseapp.com",
  projectId: "weareclassic",
  storageBucket: "weareclassic.appspot.com",
  messagingSenderId: "18533404668",
  appId: "1:18533404668:web:..."
};
```

---

## 🔐 Step 2: Add Configuration to Your Project

### Option A: Environment Variables (Recommended for Development)

Create a `.env.local` file in the project root:

```bash
# /Users/martin/We_Are_Classic/.env.local

NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=weareclassic.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=weareclassic
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=weareclassic.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=18533404668
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id_here
```

**Replace** `your_api_key_here` and `your_app_id_here` with the actual values from your Firebase config.

### Option B: Global Variables (Production)

Add this to your HTML `<head>` tag (in production deployment):

```html
<script>
  window.__firebase_config = {
    apiKey: "AIza...",
    authDomain: "weareclassic.firebaseapp.com",
    projectId: "weareclassic",
    storageBucket: "weareclassic.appspot.com",
    messagingSenderId: "18533404668",
    appId: "1:18533404668:web:..."
  };
</script>
```

---

## 🔥 Step 3: Enable Firestore Database

1. Go to [Firestore Database](https://console.firebase.google.com/project/weareclassic/firestore)
2. Click "Create database"
3. Choose **"Start in test mode"** (we'll secure it later)
4. Select a location (choose `eur3` for Europe/Romania)
5. Click "Enable"

---

## 🔒 Step 4: Set Up Authentication

1. Go to [Authentication](https://console.firebase.google.com/project/weareclassic/authentication)
2. Click "Get started"
3. Enable **"Anonymous"** authentication (for newsletter subscriptions)
4. Optionally enable **Email/Password** if you want user accounts later

---

## 📝 Step 5: Configure Firestore Security Rules

1. Go to [Firestore Rules](https://console.firebase.google.com/project/weareclassic/firestore/rules)
2. Replace the rules with:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    
    // Newsletter subscriptions - allow authenticated users to create
    match /newsletter_subscriptions/{document} {
      allow read: if request.auth != null;
      allow create: if request.auth != null 
                    && request.resource.data.email is string
                    && request.resource.data.email.matches('.+@.+\\..+');
      allow update, delete: if false;
    }
    
    // Contact form submissions - allow authenticated users to create
    match /contact_submissions/{document} {
      allow read: if false; // Only admins can read (set up via Firebase Admin)
      allow create: if request.auth != null
                    && request.resource.data.email is string
                    && request.resource.data.name is string
                    && request.resource.data.message is string;
      allow update, delete: if false;
    }
    
    // Deny all other access
    match /{document=**} {
      allow read, write: if false;
    }
  }
}
```

3. Click "Publish"

---

## 🧪 Step 6: Test the Configuration

1. Make sure your `.env.local` file is created with your credentials
2. Restart your development server:
   ```bash
   # Stop the current server (Ctrl+C), then:
   npm run dev
   ```
3. Open http://localhost:3000
4. Scroll to the Newsletter section
5. Enter an email and click "Subscribe"
6. Check your [Firestore Database](https://console.firebase.google.com/project/weareclassic/firestore/data) for a new `newsletter_subscriptions` collection

---

## 📊 Firestore Data Structure

### Newsletter Subscriptions Collection

```
newsletter_subscriptions/
  └── {auto-generated-id}
      ├── email: string
      ├── userId: string
      ├── subscribedAt: timestamp
      ├── locale: string ('en' or 'ro')
      └── status: string ('active' or 'unsubscribed')
```

### Contact Submissions Collection (Future)

```
contact_submissions/
  └── {auto-generated-id}
      ├── name: string
      ├── email: string
      ├── organization: string (optional)
      ├── role: string
      ├── message: string
      ├── locale: string
      └── submittedAt: timestamp
```

---

## 🔐 Step 7: Generate Custom Authentication Token (Optional)

If you want to use the `__initial_auth_token` method for authentication:

1. Install Firebase Admin SDK (for backend/server):
   ```bash
   npm install firebase-admin
   ```

2. Create a service account key:
   - Go to [Service Accounts](https://console.firebase.google.com/project/weareclassic/settings/serviceaccounts)
   - Click "Generate new private key"
   - Save the JSON file securely (DO NOT commit to Git!)

3. Create a server-side function to generate custom tokens (Node.js example):

```javascript
const admin = require('firebase-admin');
const serviceAccount = require('./path/to/serviceAccountKey.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

// Generate token for anonymous user
async function generateCustomToken() {
  const uid = 'anonymous-user'; // or generate unique ID
  const token = await admin.auth().createCustomToken(uid);
  return token;
}
```

4. Add the token to your HTML as `window.__initial_auth_token`

---

## ✅ Verification Checklist

- [ ] Firebase project created ✓ (weareclassic)
- [ ] Web app registered in Firebase
- [ ] Environment variables added to `.env.local`
- [ ] Firestore database enabled
- [ ] Anonymous authentication enabled
- [ ] Security rules configured
- [ ] Newsletter subscription tested
- [ ] Data appears in Firestore console

---

## 🚀 Production Deployment

When deploying to production (Vercel, Netlify, etc.):

1. Add environment variables in your hosting platform's dashboard
2. OR use the global variable method (`window.__firebase_config`)
3. Update Firestore rules to production-ready settings
4. Enable additional authentication methods if needed
5. Set up Firebase Hosting (optional) for static assets

---

## 📚 Useful Links

- **Firebase Console:** https://console.firebase.google.com/project/weareclassic
- **Firestore Database:** https://console.firebase.google.com/project/weareclassic/firestore
- **Authentication:** https://console.firebase.google.com/project/weareclassic/authentication
- **Project Settings:** https://console.firebase.google.com/project/weareclassic/settings/general
- **Firebase Documentation:** https://firebase.google.com/docs

---

## 🐛 Troubleshooting

### "Permission denied" errors
- Check that Anonymous authentication is enabled
- Verify Firestore security rules are published
- Ensure user is authenticated before writing to Firestore

### "Firebase not initialized" errors
- Verify `.env.local` file exists and has correct values
- Restart the development server after adding `.env.local`
- Check browser console for specific error messages

### Newsletter subscription not working
- Open browser DevTools → Network tab
- Look for Firestore API calls
- Check for authentication errors in Console tab
- Verify email validation is passing

---

**Your Firebase project is ready to go! Just add your configuration credentials and start testing.** 🔥








