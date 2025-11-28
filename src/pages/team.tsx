import React from 'react';
import Head from 'next/head';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { TeamRoster } from '@/components/sections/TeamRoster';

export default function TeamPage() {
  return (
    <>
      <Head>
        <title>Our Team - We Are Classic</title>
        <meta
          name="description"
          content="Meet the leadership and partners behind We Are Classic. Our governance team and community collaborators dedicated to promoting excellence in classical music."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow">
          <TeamRoster />
        </main>

        <Footer />
      </div>
    </>
  );
}



