import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import { subscribeToNewsletter } from '@/lib/firebase/newsletter';

export const Newsletter: React.FC = () => {
  const { t, i18n } = useTranslation();
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setStatus('error');
      setMessage('Please enter a valid email address');
      return;
    }

    setStatus('loading');

    try {
      const result = await subscribeToNewsletter(email, i18n.language);
      
      if (result.success) {
        setStatus('success');
        setMessage(t('newsletter.success'));
        setEmail('');
        
        setTimeout(() => {
          setStatus('idle');
          setMessage('');
        }, 5000);
      } else {
        setStatus('error');
        setMessage(result.message);
      }
    } catch (error) {
      setStatus('error');
      setMessage(t('newsletter.error'));
    }
  };

  return (
    <section className="section-spacing-sm bg-beige">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left-Aligned Text */}
          <div className="content-left">
            <h2 className="font-headline text-4xl lg:text-5xl xl:text-6xl text-black font-semibold mb-6 leading-tight">
              {t('newsletter.title')}
            </h2>
            <p className="font-sans text-lg lg:text-xl text-black/70 leading-relaxed">
              {t('newsletter.subtitle')}
            </p>
          </div>

          {/* Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="email"
                placeholder={t('newsletter.placeholder')}
                value={email}
                onChange={setEmail}
                disabled={status === 'loading' || status === 'success'}
                className="bg-white border-black/20 text-black placeholder:text-black/50 focus:border-blue"
              />
              <Button
                type="submit"
                variant="secondary"
                size="lg"
                disabled={status === 'loading' || status === 'success'}
                className="w-full"
              >
                {status === 'loading' ? 'Subscribing...' : t('newsletter.cta')}
              </Button>
            </form>

            {/* Status Messages */}
            {message && (
              <div
                className={`mt-4 p-4 rounded-md ${
                  status === 'success'
                    ? 'bg-orange/20 text-orange-dark border border-orange/30'
                    : 'bg-red-100 text-red-700 border border-red-300'
                }`}
              >
                {message}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
