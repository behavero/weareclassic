import React from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
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
}

export const FutureConcerts: React.FC = () => {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollAnimation();

  // These would typically come from Firebase/CMS
  const upcomingConcerts: Concert[] = [
    {
      id: '1',
      title: t('concerts.future.concert1.title'),
      date: t('concerts.future.concert1.date'),
      time: t('concerts.future.concert1.time'),
      venue: t('concerts.future.concert1.venue'),
      location: t('concerts.future.concert1.location'),
      image: '/images/concerts/concert-1.jpg',
      bookingUrl: 'https://your-booking-platform.com/concert-1',
      price: t('concerts.future.concert1.price'),
      artists: t('concerts.future.concert1.artists'),
      description: t('concerts.future.concert1.description'),
    },
    {
      id: '2',
      title: t('concerts.future.concert2.title'),
      date: t('concerts.future.concert2.date'),
      time: t('concerts.future.concert2.time'),
      venue: t('concerts.future.concert2.venue'),
      location: t('concerts.future.concert2.location'),
      image: '/images/concerts/concert-2.jpg',
      bookingUrl: 'https://your-booking-platform.com/concert-2',
      price: t('concerts.future.concert2.price'),
      artists: t('concerts.future.concert2.artists'),
      description: t('concerts.future.concert2.description'),
    },
    {
      id: '3',
      title: t('concerts.future.concert3.title'),
      date: t('concerts.future.concert3.date'),
      time: t('concerts.future.concert3.time'),
      venue: t('concerts.future.concert3.venue'),
      location: t('concerts.future.concert3.location'),
      image: '/images/concerts/concert-3.jpg',
      bookingUrl: 'https://your-booking-platform.com/concert-3',
      price: t('concerts.future.concert3.price'),
      artists: t('concerts.future.concert3.artists'),
      description: t('concerts.future.concert3.description'),
    },
  ];

  return (
    <section 
      id="concerts" 
      ref={ref as React.RefObject<HTMLElement>}
      className={`section-spacing bg-white transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container-custom">
        {/* Left-Aligned Section Header */}
        <div className="content-left mb-20 lg:mb-28">
          <h2 className="section-title">
            {t('concerts.future.title')}
          </h2>
          <p className="section-subtitle">
            {t('concerts.future.subtitle')}
          </p>
        </div>

        {/* Concerts Grid - All Uniform Size */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {upcomingConcerts.map((concert, index) => (
            <div
              key={concert.id}
              className={`group bg-white rounded-xl overflow-hidden transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                transitionDelay: `${index * 100}ms`,
                boxShadow: '0 4px 20px -4px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.05)'
              }}
            >
              {/* Concert Image with Sophisticated Hover */}
              <div className="relative h-64 bg-gradient-to-br from-beige to-beige-dark overflow-hidden">
                {/* Image container with hover effect */}
                <div className="absolute inset-0 transform transition-all duration-500 group-hover:scale-105">
                  {concert.image && (
                    <Image
                      src={concert.image}
                      alt={concert.title}
                      fill
                      className="object-cover"
                    />
                  )}
                </div>
                
                {/* Gradient overlay that lightens on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent group-hover:from-black/30 transition-all duration-500" />
                
                {/* Date badge */}
                <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm px-4 py-3 rounded-lg shadow-lg">
                  <div className="font-headline text-3xl font-bold text-blue leading-none mb-1">
                    {concert.date.split(' ')[0]}
                  </div>
                  <div className="font-sans text-sm text-black/70 uppercase tracking-wide">
                    {concert.date.split(' ').slice(1).join(' ')}
                  </div>
                </div>
              </div>

              {/* Concert Details */}
              <div className="p-6">
                <h3 className="font-headline text-2xl lg:text-3xl text-black font-semibold mb-4 leading-tight">
                  {concert.title}
                </h3>
                
                {/* Artists */}
                {t(`concerts.future.concert${concert.id}.artists`) && (
                  <div className="mb-6 p-4 bg-beige/30 rounded-md border-l-4 border-orange">
                    <div className="flex items-start gap-3">
                      <svg className="w-5 h-5 text-orange mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                      </svg>
                      <div>
                        <p className="font-sans text-sm font-semibold text-orange uppercase tracking-wide mb-1">Artists</p>
                        <p className="font-sans text-sm text-black/80 leading-relaxed">
                          {t(`concerts.future.concert${concert.id}.artists`)}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-black/70">
                    <svg className="w-5 h-5 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span className="font-sans font-medium">{concert.date} • {concert.time}</span>
                  </div>
                  
                  <div className="flex items-start gap-3 text-black/70">
                    <svg className="w-5 h-5 text-blue mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <div className="font-sans font-medium text-sm">{concert.venue}</div>
                      <div className="font-sans text-sm">{concert.location}</div>
                    </div>
                  </div>
                </div>

                {/* Book Tickets Button */}
                <a
                  href={concert.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full"
                >
                  <Button variant="accent" size="md" className="w-full">
                    {t('concerts.future.bookNow')}
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* View All Link - Left Aligned */}
        <div className="content-left mt-16">
          <a
            href="/concerts"
            className="inline-flex items-center gap-3 text-blue hover:text-blue-dark font-sans font-medium text-lg transition-colors"
          >
            {t('concerts.future.viewAll')}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

