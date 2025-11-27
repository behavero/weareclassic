# 🔄 Fix Firebase "Invalid API Key" Error

## ✅ Environment File Created!

Your `.env.local` file has been created with your Firebase credentials:

```
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyCVoM1Jt3L0TMJwExwa0kUP7V2mLTrQGTg
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=weareclassic.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=weareclassic
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=weareclassic.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=18533404668
NEXT_PUBLIC_FIREBASE_APP_ID=1:18533404668:web:0676332a50f8fcdd282c79
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-QDCJP1HTG0
```

---

## 🔄 **IMPORTANT: Restart Your Dev Server**

Next.js only loads `.env.local` when it **starts**. You must restart:

### In Your Terminal:
1. Press `Ctrl+C` to stop the current server
2. Run: `npm run dev`
3. Open http://localhost:3000

---

## ✅ After Restart

The Firebase error should be **GONE**!

You should now be able to:
- ✅ Subscribe to newsletter (saves to Firestore)
- ✅ No more "invalid-api-key" error
- ✅ Firebase authentication working

---

## 🧪 Test It

1. Go to http://localhost:3000
2. Scroll to Newsletter section
3. Enter your email
4. Click "Subscribe"
5. Check Firebase Console to see your subscription:
   👉 https://console.firebase.google.com/project/weareclassic/firestore/data

You should see a new document in the `newsletter_subscriptions` collection!

---

## 🐛 Still Getting Errors?

### Double-check these services are enabled:

**1. Firestore Database**
- Go to: https://console.firebase.google.com/project/weareclassic/firestore
- Should show "Cloud Firestore" (not "Get started")
- If not enabled, click "Create database" → Production mode → Europe

**2. Anonymous Authentication**
- Go to: https://console.firebase.google.com/project/weareclassic/authentication
- Under "Sign-in method" tab
- "Anonymous" should show as "Enabled"
- If not, click it and toggle "Enable"

---

## ✨ You're All Set!

After restarting, your Firebase integration will work perfectly. The environment variables are now loaded and ready to use.

**Restart command:** `npm run dev`






