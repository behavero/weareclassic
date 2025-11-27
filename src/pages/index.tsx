import React from 'react';
import Head from 'next/head';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { Hero } from '@/components/sections/Hero';
import { Mission } from '@/components/sections/Mission';
import { YoungTalents } from '@/components/sections/YoungTalents';
import { FutureConcerts } from '@/components/sections/FutureConcerts';
import { PreviousConcerts } from '@/components/sections/PreviousConcerts';
import { CommunityConcerts } from '@/components/sections/CommunityConcerts';
import { PartnersSponsors } from '@/components/sections/PartnersSponsors';
import { Newsletter } from '@/components/sections/Newsletter';

export default function Home() {
  return (
    <>
      <Head>
        <title>We Are Classic - Elevating Classical Music for Every Generation</title>
        <meta
          name="description"
          content="Bridging tradition and innovation to make classical music accessible, inspiring, and transformative for communities across Romania."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="classical music, concerts, Romania, orchestra, community, education" />
      </Head>

      <div className="min-h-screen flex flex-col">
        <Header />
        
        <main className="flex-grow">
          {/* Hero Section with Video */}
          <Hero />
          
          {/* Mission Section */}
          <Mission />
          
          {/* Young Talents Portfolio */}
          <YoungTalents />
          
          {/* Future Concerts with Booking */}
          <FutureConcerts />
          
          {/* Previous Concerts Gallery */}
          <PreviousConcerts />
          
          {/* Community Concerts (Kindergarten & Elderly) */}
          <CommunityConcerts />
          
          {/* Partners & Sponsors */}
          <PartnersSponsors />
          
          {/* Newsletter Subscription */}
          <Newsletter />
        </main>

        <Footer />
      </div>
    </>
  );
}
