import { collection, addDoc, Timestamp } from 'firebase/firestore';
import { db, authenticateUser } from './config';
import type { ContactFormData } from '@/types';

const CONTACT_COLLECTION = 'contact_submissions';
const NOTIFICATION_EMAIL = 'campeanvlad586@yahoo.com';

export const submitContactForm = async (
  formData: {
    name: string;
    email: string;
    organization?: string;
    role: 'sponsor' | 'artist' | 'other';
    message: string;
  },
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

    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      return {
        success: false,
        message: 'Please fill in all required fields',
      };
    }

    // Create contact submission document
    const submission: Omit<ContactFormData, 'submittedAt'> & { 
      submittedAt: Timestamp;
      notificationEmail: string;
      status: 'new' | 'read' | 'archived';
    } = {
      name: formData.name,
      email: formData.email.toLowerCase(),
      organization: formData.organization || '',
      role: formData.role,
      message: formData.message,
      locale,
      submittedAt: Timestamp.now(),
      notificationEmail: NOTIFICATION_EMAIL,
      status: 'new',
    };

    // Add to Firestore
    await addDoc(collection(db, CONTACT_COLLECTION), submission);

    // Note: Email notifications are typically handled by Firebase Cloud Functions
    // You can set up a trigger function to send emails when new documents are added
    // to the contact_submissions collection

    return {
      success: true,
      message: 'Your message has been sent successfully',
    };
  } catch (error) {
    console.error('Contact form submission error:', error);
    return {
      success: false,
      message: 'Failed to send message. Please try again later.',
    };
  }
};


