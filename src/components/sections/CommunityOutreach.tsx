import React from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import Link from 'next/link';

interface OutreachVenue {
  id: string;
  name: string;
  type: string;
  location: string;
  concertsPerYear: number;
}

export const CommunityOutreach: React.FC = () => {
  const { t } = useTranslation();

  const venues: OutreachVenue[] = [
    {
      id: '1',
      name: t('community.venues.venue1.name'),
      type: t('community.venues.venue1.type'),
      location: t('community.venues.venue1.location'),
      concertsPerYear: 4,
    },
    {
      id: '2',
      name: t('community.venues.venue2.name'),
      type: t('community.venues.venue2.type'),
      location: t('community.venues.venue2.location'),
      concertsPerYear: 6,
    },
    {
      id: '3',
      name: t('community.venues.venue3.name'),
      type: t('community.venues.venue3.type'),
      location: t('community.venues.venue3.location'),
      concertsPerYear: 3,
    },
    {
      id: '4',
      name: t('community.venues.venue4.name'),
      type: t('community.venues.venue4.type'),
      location: t('community.venues.venue4.location'),
      concertsPerYear: 5,
    },
    {
      id: '5',
      name: t('community.venues.venue5.name'),
      type: t('community.venues.venue5.type'),
      location: t('community.venues.venue5.location'),
      concertsPerYear: 4,
    },
    {
      id: '6',
      name: t('community.venues.venue6.name'),
      type: t('community.venues.venue6.type'),
      location: t('community.venues.venue6.location'),
      concertsPerYear: 3,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        {/* Fallback gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-blue-dark to-black -z-10" />

        {/* Full-Width Video Background */}
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          poster="/images/hero/video-poster.jpg"
        >
          <source src="/videos/hero-background.webm" type="video/webm" />
          <source src="/videos/hero-background.mp4" type="video/mp4" />
        </video>

        {/* Light Semi-Transparent Overlay */}
        <div className="absolute inset-0 bg-black/35" />

        {/* Left-Aligned Content Container */}
        <div className="relative z-10 container-custom w-full py-32 lg:py-40">
          <div className="max-w-4xl content-left">
            <span className="inline-block bg-orange text-white text-sm font-bold px-4 py-2 rounded-full mb-4">
              {t('community.hero.badge')}
            </span>
            <h1 className="font-headline text-5xl sm:text-6xl lg:text-7xl text-white font-semibold leading-tight mb-8">
              {t('community.hero.title')}
            </h1>
            <p className="font-sans text-lg lg:text-xl text-white/90 leading-relaxed mb-10 max-w-2xl">
              {t('community.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-black mb-8">
              {t('community.mission.title')}
            </h2>
            <p className="font-sans text-xl text-black/70 leading-relaxed">
              {t('community.mission.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-32 bg-beige">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="font-display text-5xl font-bold text-black mb-6">
              {t('community.approach.title')}
            </h2>
            <p className="font-sans text-xl text-black/60 max-w-3xl mx-auto">
              {t('community.approach.subtitle')}
            </p>
          </div>

          {/* Approach Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {[1, 2, 3, 4].map((num) => (
              <div
                key={num}
                className="bg-white rounded-2xl p-8 text-center shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-blue flex items-center justify-center text-white font-bold text-2xl">
                  {num}
                </div>
                <h3 className="font-display text-xl font-semibold text-black mb-4">
                  {t(`community.approach.step${num}.title`)}
                </h3>
                <p className="font-sans text-sm text-black/70 leading-relaxed">
                  {t(`community.approach.step${num}.description`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Image Section */}
      <section className="py-32 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative h-96 lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/community/elderly-concert.jpg"
                alt="Musicians performing for elderly residents"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Content */}
            <div>
              <div className="inline-block px-4 py-2 bg-blue/10 rounded-full mb-6">
                <p className="font-sans text-sm font-semibold text-blue uppercase tracking-wider">
                  {t('community.featured.badge')}
                </p>
              </div>
              <h2 className="font-display text-5xl font-bold text-black mb-6">
                {t('community.featured.title')}
              </h2>
              <p className="font-sans text-xl text-black/70 leading-relaxed mb-8">
                {t('community.featured.description')}
              </p>

              {/* Key Benefits */}
              <div className="space-y-4 mb-10">
                {[1, 2, 3, 4].map((num) => (
                  <div key={num} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange flex items-center justify-center text-white font-bold">
                      ✓
                    </div>
                    <p className="font-sans text-lg text-black/80">
                      {t(`community.featured.benefit${num}`)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Venues We Serve */}
      <section className="py-32 bg-beige">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="font-display text-5xl font-bold text-black mb-6">
              {t('community.venues.title')}
            </h2>
            <p className="font-sans text-xl text-black/60 max-w-3xl mx-auto">
              {t('community.venues.subtitle')}
            </p>
          </div>

          {/* Venues Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {venues.map((venue) => (
              <div
                key={venue.id}
                className="bg-white rounded-xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-full bg-blue/10 flex items-center justify-center text-blue">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  </div>
                  <div className="text-right">
                    <div className="font-display text-2xl font-bold text-orange">
                      {venue.concertsPerYear}
                    </div>
                    <div className="text-xs text-black/50 uppercase tracking-wide">
                      {t('community.venues.concertsPerYear')}
                    </div>
                  </div>
                </div>

                <h3 className="font-display text-xl font-semibold text-black mb-2">
                  {venue.name}
                </h3>
                <p className="font-sans text-sm text-orange font-medium mb-2">
                  {venue.type}
                </p>
                <p className="font-sans text-sm text-black/60">
                  {venue.location}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Statistics */}
      <section className="py-24 bg-blue text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto text-center">
            <div>
              <div className="font-display text-6xl font-bold mb-4">
                {t('community.impact.stat1.number')}
              </div>
              <p className="font-sans text-xl">
                {t('community.impact.stat1.label')}
              </p>
            </div>
            <div>
              <div className="font-display text-6xl font-bold mb-4">
                {t('community.impact.stat2.number')}
              </div>
              <p className="font-sans text-xl">
                {t('community.impact.stat2.label')}
              </p>
            </div>
            <div>
              <div className="font-display text-6xl font-bold mb-4">
                {t('community.impact.stat3.number')}
              </div>
              <p className="font-sans text-xl">
                {t('community.impact.stat3.label')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-white">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="font-display text-5xl font-bold text-black mb-6">
              {t('community.testimonials.title')}
            </h2>
            <p className="font-sans text-xl text-black/60 max-w-3xl mx-auto">
              {t('community.testimonials.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[1, 2].map((num) => (
              <div
                key={num}
                className="bg-beige rounded-2xl p-10"
              >
                <div className="text-orange text-5xl mb-6">"</div>
                <p className="font-sans text-lg text-black/80 leading-relaxed mb-6 italic">
                  {t(`community.testimonials.testimonial${num}.quote`)}
                </p>
                <div className="border-t border-black/10 pt-6">
                  <p className="font-display text-xl font-semibold text-black">
                    {t(`community.testimonials.testimonial${num}.name`)}
                  </p>
                  <p className="font-sans text-sm text-black/60">
                    {t(`community.testimonials.testimonial${num}.role`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-gradient-to-br from-beige to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-5xl font-bold text-black mb-8">
              {t('community.finalCta.title')}
            </h2>
            <p className="font-sans text-xl text-black/70 leading-relaxed mb-12">
              {t('community.finalCta.description')}
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-5 bg-blue text-white font-sans font-semibold text-lg rounded-md hover:scale-105 hover:shadow-xl transition-all duration-300"
            >
              {t('community.finalCta.button')}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

