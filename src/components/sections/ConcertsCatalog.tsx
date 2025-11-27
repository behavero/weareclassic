import React from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/Button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface Concert {
  id: string;
  title: string;
  date: string;
  time: string;
  venue: string;
  location: string;
  image: string;
  bookingUrl: string;
  price: string;
  artists: string;
  description: string;
  type: 'upcoming' | 'past';
  attendees?: number;
}

export const ConcertsCatalog: React.FC = () => {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollAnimation();

  const upcomingConcerts: Concert[] = [
    {
      id: '1',
      title: t('concerts.future.concert1.title'),
      date: t('concerts.future.concert1.date'),
      time: t('concerts.future.concert1.time'),
      venue: t('concerts.future.concert1.venue'),
      location: t('concerts.future.concert1.location'),
      image: '/images/gallery/opening-concert-razvan-suma-oana-crisu.jpeg',
      bookingUrl: 'https://www.eventino.co/we-are-classics/1216',
      price: t('concerts.future.concert1.price'),
      artists: t('concerts.future.concert1.artists'),
      description: t('concerts.future.concert1.description'),
      type: 'upcoming',
    },
    {
      id: '2',
      title: t('concerts.future.concert2.title'),
      date: t('concerts.future.concert2.date'),
      time: t('concerts.future.concert2.time'),
      venue: t('concerts.future.concert2.venue'),
      location: t('concerts.future.concert2.location'),
      image: '/images/gallery/incoming pictures.jpg',
      bookingUrl: 'https://your-booking-platform.com/concert-2',
      price: t('concerts.future.concert2.price'),
      artists: t('concerts.future.concert2.artists'),
      description: t('concerts.future.concert2.description'),
      type: 'upcoming',
    },
    {
      id: '3',
      title: t('concerts.future.concert3.title'),
      date: t('concerts.future.concert3.date'),
      time: t('concerts.future.concert3.time'),
      venue: t('concerts.future.concert3.venue'),
      location: t('concerts.future.concert3.location'),
      image: '/images/gallery/incoming pictures.jpg',
      bookingUrl: 'https://your-booking-platform.com/concert-3',
      price: t('concerts.future.concert3.price'),
      artists: t('concerts.future.concert3.artists'),
      description: t('concerts.future.concert3.description'),
      type: 'upcoming',
    },
  ];

  const pastConcerts: Concert[] = [
    {
      id: 'p1',
      title: t('concerts.past.concert1.title'),
      date: t('concerts.past.concert1.date'),
      time: '',
      venue: t('concerts.past.concert1.venue'),
      location: t('concerts.past.concert1.location'),
      image: '/images/gallery/IMG_2137.jpeg',
      bookingUrl: '',
      price: '',
      artists: '',
      description: '',
      type: 'past',
    },
    {
      id: 'p2',
      title: t('concerts.past.concert2.title'),
      date: t('concerts.past.concert2.date'),
      time: '',
      venue: t('concerts.past.concert2.venue'),
      location: t('concerts.past.concert2.location'),
      image: '/images/gallery/incoming pictures.jpg',
      bookingUrl: '',
      price: '',
      artists: '',
      description: '',
      type: 'past',
      attendees: 350,
    },
    {
      id: 'p3',
      title: t('concerts.past.concert3.title'),
      date: t('concerts.past.concert3.date'),
      time: '',
      venue: t('concerts.past.concert3.venue'),
      location: t('concerts.past.concert3.location'),
      image: '/images/gallery/incoming pictures.jpg',
      bookingUrl: '',
      price: '',
      artists: '',
      description: '',
      type: 'past',
      attendees: 400,
    },
    {
      id: 'p4',
      title: t('concerts.past.concert4.title'),
      date: t('concerts.past.concert4.date'),
      time: '',
      venue: t('concerts.past.concert4.venue'),
      location: t('concerts.past.concert4.location'),
      image: '/images/gallery/incoming pictures.jpg',
      bookingUrl: '',
      price: '',
      artists: '',
      description: '',
      type: 'past',
      attendees: 600,
    },
  ];

  return (
    <section
      id="concerts-catalog"
      ref={ref as React.RefObject<HTMLElement>}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Hero Banner */}
      <div className="relative min-h-screen flex items-center overflow-hidden">
        {/* Fallback gradient background (only shows if video fails to load) */}
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

        {/* Light Semi-Transparent Overlay - Lets video show through */}
        <div className="absolute inset-0 bg-black/35" />

        {/* Left-Aligned Content Container */}
        <div className="relative z-10 container-custom w-full py-32 lg:py-40">
          <div className="max-w-4xl content-left">
            <span className="inline-block bg-orange text-white text-sm font-bold px-4 py-2 rounded-full mb-4">
              {t('concerts.catalog.hero.badge')}
            </span>
            <h1 className="font-headline text-5xl sm:text-6xl lg:text-7xl text-white font-semibold leading-tight mb-8">
              {t('concerts.catalog.hero.headline')}
            </h1>
            <p className="font-sans text-lg lg:text-xl text-white/90 leading-relaxed mb-10 max-w-2xl">
              {t('concerts.catalog.hero.subtitle')}
            </p>
          </div>
        </div>
      </div>

      {/* Upcoming Concerts */}
      <div id="upcoming" className="section-spacing bg-beige">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title text-black mb-4">
              {t('concerts.future.title')}
            </h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              {t('concerts.future.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {upcomingConcerts.map((concert, index) => (
              <div
                key={concert.id}
                className={`group bg-white rounded-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                  boxShadow: '0 4px 20px -4px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.05)'
                }}
              >
                {/* Concert Image */}
                <div className="relative h-64 bg-black/5 overflow-hidden">
                  <Image
                    src={concert.image}
                    alt={concert.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-primary-blue text-white px-4 py-2 rounded-md shadow-lg">
                    <div className="text-xs font-semibold uppercase tracking-wide">
                      {concert.date.split(',')[0]}
                    </div>
                    <div className="text-lg font-bold">
                      {concert.date.split(',')[1]}
                    </div>
                  </div>
                </div>

                {/* Concert Details */}
                <div className="p-6">
                  <h3 className="font-serif text-2xl text-black font-semibold mb-4 group-hover:text-primary-blue transition-colors duration-300">
                    {concert.title}
                  </h3>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-3 text-black/70">
                      <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                      <div>
                        <p className="text-sm font-semibold text-black uppercase tracking-wide mb-1">
                          {t('concerts.future.artistsLabel')}
                        </p>
                        <p className="text-base">{concert.artists}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 text-black/70">
                      <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <p className="text-base">{concert.date} • {concert.time}</p>
                    </div>

                    <div className="flex items-start gap-3 text-black/70">
                      <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <div>
                        <p className="text-base font-medium text-black">{concert.venue}</p>
                        <p className="text-sm">{concert.location}</p>
                      </div>
                    </div>
                  </div>

                  <a 
                    href={concert.bookingUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <Button variant="secondary" size="md" className="w-full">
                      {t('concerts.future.bookButton')}
                    </Button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Past Concerts */}
      <div className="section-spacing bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title text-black mb-4">
              {t('concerts.past.title')}
            </h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              {t('concerts.past.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pastConcerts.map((concert, index) => (
              <div
                key={concert.id}
                className="bg-beige rounded-lg overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <div className="relative h-48 bg-black/5">
                  <Image
                    src={concert.image}
                    alt={concert.title}
                    fill
                    className="object-cover"
                  />
                  {concert.attendees && (
                    <div className="absolute bottom-3 right-3 bg-orange text-white px-3 py-1 rounded-md text-sm font-semibold">
                      {concert.attendees}+ {t('concerts.past.attendees')}
                    </div>
                  )}
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-xl text-black font-semibold mb-3">
                    {concert.title}
                  </h3>
                  <div className="space-y-2 text-sm text-black/70">
                    <div className="flex items-center gap-2">
                      <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <p>{concert.date}</p>
                    </div>
                    <div className="flex items-start gap-2">
                      <svg className="w-4 h-4 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <div>
                        <p className="font-medium text-black">{concert.venue}</p>
                        <p className="text-xs">{concert.location}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="section-spacing bg-gradient-to-br from-beige to-white text-center">
        <div className="container-custom max-w-3xl mx-auto">
          <h2 className="section-title text-black mb-6">
            {t('concerts.catalog.finalCta.title')}
          </h2>
          <p className="text-lg text-black/70 leading-relaxed mb-10">
            {t('concerts.catalog.finalCta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/contact">
              <Button variant="primary" size="lg">
                {t('concerts.catalog.finalCta.cta1')}
              </Button>
            </Link>
            <Link href="#upcoming">
              <Button variant="outline" size="lg">
                {t('concerts.catalog.finalCta.cta2')}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

