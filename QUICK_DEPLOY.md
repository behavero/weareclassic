# ⚡ Quick Deploy - We Are Classic

Get your site live in **5 minutes**!

---

## 🚀 Step 1: Create Environment File (30 seconds)

Run this command in your terminal:

```bash
cd /Users/martin/We_Are_Classic

cat > .env.local << 'EOF'
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

## 🔥 Step 2: Enable Firebase Services (2 minutes)

### A. Enable Firestore
1. Go to: https://console.firebase.google.com/project/weareclassic/firestore
2. Click **"Create database"**
3. Choose **"Start in production mode"**
4. Select **"eur3 (Europe)"**
5. Click **"Enable"**

### B. Enable Authentication
1. Go to: https://console.firebase.google.com/project/weareclassic/authentication
2. Click **"Get started"**
3. Click **"Anonymous"**
4. Toggle **"Enable"**
5. Click **"Save"**

---

## 💻 Step 3: Install & Deploy (2 minutes)

```bash
# Install Firebase CLI (one-time only)
npm install -g firebase-tools

# Login to Firebase
firebase login

# Install project dependencies
npm install

# Build and deploy
npm run deploy
```

---

## ✅ Done!

Your site is now live at:
### 🌐 https://weareclassic.web.app

---

## 🧪 Test Your Site

1. **Open** https://weareclassic.web.app
2. **Test language switcher** (EN ⟷ RO)
3. **Subscribe to newsletter** (scroll to bottom)
4. **Check Firestore** to see your subscription:
   - Go to: https://console.firebase.google.com/project/weareclassic/firestore/data
   - Look for `newsletter_subscriptions` collection

---

## 🔄 Update & Redeploy

When you make changes:

```bash
npm run deploy
```

That's it! Changes will be live in ~1 minute.

---

## 📱 Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit - We Are Classic website"
git remote add origin https://github.com/behavero/weareclassic.git
git branch -M main
git push -u origin main
```

---

## ❓ Troubleshooting

### "Permission denied" error?
```bash
firebase logout
firebase login
```

### Build fails?
```bash
rm -rf node_modules .next out
npm install
npm run build
```

### Need help?
Check `DEPLOYMENT_GUIDE.md` for detailed instructions.

---

**That's it! You're live! 🎉**




