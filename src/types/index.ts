export interface NewsletterSubscription {
  email: string;
  userId?: string;
  subscribedAt: Date;
  locale: string;
  status: 'active' | 'unsubscribed';
}

export interface ContactFormData {
  name: string;
  email: string;
  organization?: string;
  role: 'sponsor' | 'artist' | 'other';
  message: string;
  locale: string;
  submittedAt: Date;
}

export type Language = 'en' | 'ro';

export interface NavigationItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}






