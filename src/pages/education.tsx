import React from 'react';
import Head from 'next/head';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { EducationProgram } from '@/components/sections/EducationProgram';

export default function EducationPage() {
  return (
    <>
      <Head>
        <title>We Are Classics Education - Ateliers for Kids</title>
        <meta
          name="description"
          content="We Are Classics Education brings classical music to kindergartens through creative, engaging workshops. Teaching classical music in a simple, joyful manner that inspires young minds."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="music education, kindergarten, classical music for kids, workshops, Romania" />
      </Head>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow">
          <EducationProgram />
        </main>

        <Footer />
      </div>
    </>
  );
}



