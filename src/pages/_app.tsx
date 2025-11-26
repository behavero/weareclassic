import type { AppProps } from 'next/app';
import { useEffect } from 'react';
import '@/styles/globals.css';
import '@/lib/i18n/config';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Initialize Firebase on client side
    if (typeof window !== 'undefined') {
      import('@/lib/firebase/config').then(({ authenticateUser }) => {
        // Attempt to authenticate user with initial token
        authenticateUser().catch((error) => {
          console.warn('Firebase authentication not available:', error);
        });
      });
    }
  }, []);

  return <Component {...pageProps} />;
}




