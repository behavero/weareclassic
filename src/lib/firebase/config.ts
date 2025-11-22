import { initializeApp, getApps, FirebaseApp } from 'firebase/app';
import { getAuth, signInWithCustomToken, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';

// Global variables provided by the environment
declare global {
  interface Window {
    __app_id?: string;
    __firebase_config?: {
      apiKey: string;
      authDomain: string;
      projectId: string;
      storageBucket: string;
      messagingSenderId: string;
      appId: string;
    };
    __initial_auth_token?: string;
  }
}

// Firebase configuration
const firebaseConfig = typeof window !== 'undefined' && window.__firebase_config
  ? window.__firebase_config
  : {
      apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || '',
      authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || '',
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || '',
      storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || '',
      messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || '',
      appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || '',
      measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || '',
    };

// Initialize Firebase
let app: FirebaseApp;
let auth: Auth;
let db: Firestore;

if (typeof window !== 'undefined' && !getApps().length) {
  app = initializeApp(firebaseConfig);
  auth = getAuth(app);
  db = getFirestore(app);
} else if (typeof window !== 'undefined') {
  app = getApps()[0];
  auth = getAuth(app);
  db = getFirestore(app);
}

// Authentication helper
let isAuthenticating = false;
let authPromise: Promise<string | null> | null = null;

export const authenticateUser = async (): Promise<string | null> => {
  if (typeof window === 'undefined') return null;
  
  // Return existing promise if already authenticating
  if (isAuthenticating && authPromise) {
    return authPromise;
  }

  // If already authenticated, return current user ID
  if (auth.currentUser) {
    return auth.currentUser.uid;
  }

  // Start new authentication
  isAuthenticating = true;
  authPromise = (async () => {
    try {
      const token = window.__initial_auth_token;
      if (token) {
        const userCredential = await signInWithCustomToken(auth, token);
        return userCredential.user.uid;
      }
      return null;
    } catch (error) {
      console.error('Firebase authentication error:', error);
      return null;
    } finally {
      isAuthenticating = false;
      authPromise = null;
    }
  })();

  return authPromise;
};

export { app, auth, db };

