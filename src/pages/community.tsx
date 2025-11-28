import React from 'react';
import Head from 'next/head';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CommunityOutreach } from '@/components/sections/CommunityOutreach';

export default function CommunityPage() {
  return (
    <>
      <Head>
        <title>Community Outreach - We Are Classic</title>
        <meta
          name="description"
          content="We Are Classic brings the healing power of classical music to elder care homes, hospitals, and social centers across Romania. Music that brings comfort, joy, and connection to those who need it most."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="community outreach, elder care, hospitals, classical music, Romania, social impact" />
      </Head>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow">
          <CommunityOutreach />
        </main>

        <Footer />
      </div>
    </>
  );
}



