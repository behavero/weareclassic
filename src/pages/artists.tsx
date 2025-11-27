import React from 'react';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { ArtistsCatalog } from '@/components/sections/ArtistsCatalog';

export default function ArtistsPage() {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t('artists.meta.title')}</title>
        <meta name="description" content={t('artists.meta.description')} />
      </Head>

      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <ArtistsCatalog />
        </main>
        <Footer />
      </div>
    </>
  );
}

