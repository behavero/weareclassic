# Contact Form Email Notifications Setup

## Overview
Contact form submissions are now stored in Firestore under the `contact_submissions` collection. All submissions will be sent to: **campeanvlad586@yahoo.com**

## Current Implementation

### ✅ What's Working Now:
1. **Form Submissions**: Contact form data is saved to Firestore
2. **Data Structure**: Each submission includes:
   - name
   - email
   - organization (optional)
   - role (sponsor/artist/other)
   - message
   - locale (language)
   - submittedAt (timestamp)
   - notificationEmail: campeanvlad586@yahoo.com
   - status: new/read/archived

3. **Security**: Firestore rules ensure only authenticated users can submit

### 📧 Email Notifications (Requires Additional Setup)

To receive email notifications when someone submits the contact form, you need to set up a Firebase Cloud Function. Here are your options:

## Option 1: Firebase Extensions (Easiest)

1. **Install the "Trigger Email" Extension**
   ```bash
   firebase ext:install firebase/firestore-send-email
   ```

2. **Configure the extension:**
   - Collection path: `contact_submissions`
   - Email field: `notificationEmail`
   - Template:
     ```
     Subject: New Contact Form Submission
     
     You have received a new contact form submission:
     
     Name: {{name}}
     Email: {{email}}
     Organization: {{organization}}
     Role: {{role}}
     Message: {{message}}
     Submitted: {{submittedAt}}
     ```

3. **Set up SMTP or SendGrid** for email delivery

## Option 2: Custom Cloud Function

Create a Cloud Function that triggers when a new document is added:

```typescript
// functions/src/index.ts
import * as functions from 'firebase-functions';
import * as nodemailer from 'nodemailer';

const mailTransport = nodemailer.createTransport({
  service: 'gmail', // or your email service
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-app-password'
  }
});

export const sendContactNotification = functions.firestore
  .document('contact_submissions/{submissionId}')
  .onCreate(async (snapshot, context) => {
    const submission = snapshot.data();
    
    const mailOptions = {
      from: 'We Are Classic <noreply@weareclassic.ro>',
      to: 'campeanvlad586@yahoo.com',
      subject: `New Contact Form: ${submission.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${submission.name}</p>
        <p><strong>Email:</strong> ${submission.email}</p>
        <p><strong>Organization:</strong> ${submission.organization || 'N/A'}</p>
        <p><strong>Role:</strong> ${submission.role}</p>
        <p><strong>Message:</strong></p>
        <p>${submission.message}</p>
        <p><strong>Submitted:</strong> ${submission.submittedAt.toDate()}</p>
      `
    };
    
    await mailTransport.sendMail(mailOptions);
    console.log('Email sent to:', submission.notificationEmail);
  });
```

### Deploy the function:
```bash
cd functions
npm install
firebase deploy --only functions
```

## Option 3: Third-Party Services

You can also use services like:
- **SendGrid** - Free tier includes 100 emails/day
- **Mailgun** - Free tier includes 100 emails/day
- **AWS SES** - Very affordable email service
- **Zapier** - Connect Firestore to email (no code required)

## Viewing Submissions

You can view all contact form submissions in the Firebase Console:

1. Go to: https://console.firebase.google.com/project/weareclassic
2. Navigate to: **Firestore Database**
3. Collection: **contact_submissions**

Each submission will show:
- Status: new (unread), read, or archived
- All form fields
- Timestamp
- Notification email address

## Testing the Form

1. Visit: https://weareclassic.web.app/contact
2. Fill out the form
3. Check Firestore Console to see the submission
4. (After email setup) Check campeanvlad586@yahoo.com for notification

## Security Notes

- Firestore rules ensure only authenticated users can submit forms
- Email addresses are stored in lowercase for consistency
- Submissions cannot be modified or deleted by users
- Only the email notification recipient can read submissions (via Firebase Console)

## Troubleshooting

If submissions aren't working:
1. Check Firebase Authentication is working
2. Verify Firestore rules are deployed
3. Check browser console for errors
4. Ensure user is authenticated (anonymous auth is enabled)

---

**Status**: ✅ Form submissions working | ⏳ Email notifications pending setup
**Notification Email**: campeanvlad586@yahoo.com


