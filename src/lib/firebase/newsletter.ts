import { collection, addDoc, query, where, getDocs, Timestamp } from 'firebase/firestore';
import { db, authenticateUser } from './config';
import type { NewsletterSubscription } from '@/types';

const NEWSLETTER_COLLECTION = 'newsletter_subscriptions';

export const subscribeToNewsletter = async (
  email: string,
  locale: string = 'en'
): Promise<{ success: boolean; message: string }> => {
  try {
    // Authenticate user first
    const userId = await authenticateUser();
    
    if (!userId) {
      return {
        success: false,
        message: 'Authentication required',
      };
    }

    // Check if email already exists
    const q = query(
      collection(db, NEWSLETTER_COLLECTION),
      where('email', '==', email.toLowerCase()),
      where('status', '==', 'active')
    );
    
    const querySnapshot = await getDocs(q);
    
    if (!querySnapshot.empty) {
      return {
        success: false,
        message: 'This email is already subscribed',
      };
    }

    // Add new subscription
    const subscription: Omit<NewsletterSubscription, 'subscribedAt'> & { subscribedAt: Timestamp } = {
      email: email.toLowerCase(),
      userId,
      subscribedAt: Timestamp.now(),
      locale,
      status: 'active',
    };

    await addDoc(collection(db, NEWSLETTER_COLLECTION), subscription);

    return {
      success: true,
      message: 'Successfully subscribed to newsletter',
    };
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return {
      success: false,
      message: 'Failed to subscribe. Please try again later.',
    };
  }
};

export const checkSubscriptionStatus = async (email: string): Promise<boolean> => {
  try {
    const userId = await authenticateUser();
    if (!userId) return false;

    const q = query(
      collection(db, NEWSLETTER_COLLECTION),
      where('email', '==', email.toLowerCase()),
      where('status', '==', 'active')
    );
    
    const querySnapshot = await getDocs(q);
    return !querySnapshot.empty;
  } catch (error) {
    console.error('Check subscription error:', error);
    return false;
  }
};








