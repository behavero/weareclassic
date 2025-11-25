import React, { useState } from 'react';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Input } from '@/components/ui/Input';
import { Button } from '@/components/ui/Button';
import { submitContactForm } from '@/lib/firebase/contact';

export default function Contact() {
  const { t, i18n } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    role: 'other' as 'sponsor' | 'artist' | 'other',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const result = await submitContactForm(formData, i18n.language);
      
      if (result.success) {
        setStatus('success');
        setFormData({
          name: '',
          email: '',
          organization: '',
          role: 'other',
          message: '',
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setStatus('idle');
        }, 5000);
      } else {
        setStatus('error');
        setErrorMessage(result.message);
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage(t('contact.form.error'));
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <>
      <Head>
        <title>{t('contact.title')} - We Are Classic</title>
        <meta name="description" content={t('contact.subtitle')} />
      </Head>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-grow pt-24 pb-20">
          <div className="container-custom">
            <div className="max-w-3xl mx-auto">
              <h1 className="font-serif text-5xl md:text-6xl text-black mb-6 text-center">
                {t('contact.title')}
              </h1>
              <p className="text-xl text-black/70 mb-12 text-center">
                {t('contact.subtitle')}
              </p>

              <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 shadow-lg">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-black mb-2">
                    {t('contact.form.name')}
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(value) => handleChange('name', value)}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-black mb-2">
                    {t('contact.form.email')}
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(value) => handleChange('email', value)}
                    required
                  />
                </div>

                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-black mb-2">
                    {t('contact.form.organization')}
                  </label>
                  <Input
                    id="organization"
                    type="text"
                    value={formData.organization}
                    onChange={(value) => handleChange('organization', value)}
                  />
                </div>

                <div>
                  <label htmlFor="role" className="block text-sm font-medium text-black mb-2">
                    {t('contact.form.role.label')}
                  </label>
                  <select
                    id="role"
                    value={formData.role}
                    onChange={(e) => handleChange('role', e.target.value)}
                    className="w-full px-4 py-3 bg-white border-2 border-black/20 focus:border-blue focus:outline-none transition-colors duration-200 rounded-md"
                    required
                  >
                    <option value="sponsor">{t('contact.form.role.sponsor')}</option>
                    <option value="artist">{t('contact.form.role.artist')}</option>
                    <option value="other">{t('contact.form.role.other')}</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-black mb-2">
                    {t('contact.form.message')}
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    rows={6}
                    required
                    className="w-full px-4 py-3 bg-white border-2 border-black/20 focus:border-blue focus:outline-none transition-colors duration-200 placeholder:text-black/50 rounded-md"
                  />
                </div>

                {status === 'success' && (
                  <div className="p-4 bg-orange/20 text-orange-dark border border-orange rounded-md">
                    {t('contact.form.success')}
                  </div>
                )}

                {status === 'error' && (
                  <div className="p-4 bg-red-100 text-red-800 border border-red-300 rounded-md">
                    {errorMessage || t('contact.form.error')}
                  </div>
                )}

                <Button type="submit" variant="primary" size="lg" className="w-full">
                  {status === 'loading' ? 'Sending...' : t('contact.form.submit')}
                </Button>
              </form>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
}

