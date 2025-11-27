import React from 'react';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ConcertsCatalog } from '@/components/sections/ConcertsCatalog';

export default function ConcertsPage() {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t('concerts.meta.title')}</title>
        <meta name="description" content={t('concerts.meta.description')} />
      </Head>

      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <ConcertsCatalog />
        </main>
        <Footer />
      </div>
    </>
  );
}

