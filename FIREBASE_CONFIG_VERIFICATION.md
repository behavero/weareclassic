# Firebase Configuration Verification

## ✅ Project Status: ACTIVE

**Project ID:** weareclassic  
**Project Number:** 18533404668  
**Authenticated User:** martin@behave.ro  
**Hosting URL:** https://weareclassic.web.app

---

## 📱 Web App Configuration

**App ID:** 1:18533404668:web:0676332a50f8fcdd282c79  
**Display Name:** WeAreClassic  
**Status:** ACTIVE

---

## 🔑 Required Environment Variables

Your `.env.local` file should contain these exact values:

```env
NEXT_PUBLIC_FIREBASE_API_KEY=AIzaSyCVoM1Jt3L0TMJwExwa0kUP7V2mLTrQGTg
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=weareclassic.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=weareclassic
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=weareclassic.firebasestorage.app
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=18533404668
NEXT_PUBLIC_FIREBASE_APP_ID=1:18533404668:web:0676332a50f8fcdd282c79
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=G-QDCJP1HTG0
```

---

## ✅ Configuration Checklist

### 1. Environment Variables
- [ ] Verify `.env.local` exists in project root
- [ ] Verify all variables match the values above
- [ ] Restart dev server after any changes (`npm run dev`)

### 2. Firebase Authentication
- [ ] Go to [Firebase Console - Authentication](https://console.firebase.google.com/project/weareclassic/authentication/providers)
- [ ] Click **Sign-in method** tab
- [ ] Enable **Anonymous** provider
- [ ] Click **Save**

### 3. Firestore Database
- [ ] Go to [Firebase Console - Firestore](https://console.firebase.google.com/project/weareclassic/firestore)
- [ ] Verify database exists (already created)
- [ ] Location: eur3 (Europe)
- [ ] Security rules deployed: ✅

### 4. Test Form Submissions

**After enabling Anonymous Authentication:**

#### Newsletter Test:
1. Visit https://weareclassic.web.app
2. Scroll to newsletter section
3. Enter email and click Subscribe
4. Check Firestore → `newsletter_subscriptions` collection

#### Contact Form Test:
1. Visit https://weareclassic.web.app/contact
2. Fill form completely
3. Click Send Message
4. Check Firestore → `contact_submissions` collection
5. Verify notificationEmail is: campeanvlad586@yahoo.com

---

## 🔒 Current Security Rules

The following Firestore rules are deployed and active:

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
      allow read: if false; // Only admins can read
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

---

## 🚨 Critical Action Required

**You MUST enable Anonymous Authentication for forms to work!**

Without it enabled, users cannot authenticate and therefore cannot submit forms (Firestore rules require `request.auth != null`).

**Steps:**
1. [Open Authentication Settings](https://console.firebase.google.com/project/weareclassic/authentication/providers)
2. Click on **Anonymous** provider
3. Toggle **Enable**
4. Click **Save**

---

## 🧪 Debugging Form Submissions

If forms still don't work after enabling anonymous auth:

1. **Open browser console** (F12) on the website
2. Try submitting a form
3. Look for messages:
   - ✅ `"User authenticated anonymously: [uid]"` = Working!
   - ❌ Error about authentication = Not enabled yet
   - ❌ Error about permissions = Check Firestore rules

4. **Check Network tab** in browser console:
   - Should see successful POST to `firestore.googleapis.com`
   - Status 200 = Success
   - Status 403 = Permission denied (auth issue)

---

## 📊 Expected Database Structure

### newsletter_subscriptions
```json
{
  "email": "user@example.com",
  "userId": "anonymous-uid-here",
  "subscribedAt": "Timestamp",
  "locale": "en",
  "status": "active"
}
```

### contact_submissions
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "organization": "Company Name",
  "role": "sponsor",
  "message": "Message text here",
  "locale": "en",
  "submittedAt": "Timestamp",
  "notificationEmail": "campeanvlad586@yahoo.com",
  "status": "new"
}
```

---

## ✨ All Systems Ready!

Once you enable Anonymous Authentication, your website will have:

✅ Working newsletter subscriptions  
✅ Working contact form  
✅ Data saved to Firestore  
✅ Notifications to campeanvlad586@yahoo.com (metadata field)  
✅ Secure authentication  
✅ Proper security rules  

**Last step: Enable Anonymous Authentication NOW!**

[→ Go to Firebase Authentication Settings](https://console.firebase.google.com/project/weareclassic/authentication/providers)




