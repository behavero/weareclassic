import React from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface PastConcert {
  id: string;
  title: string;
  date: string;
  venue: string;
  location: string;
  image: string;
  videoUrl?: string;
  attendees?: number;
}

export const PreviousConcerts: React.FC = () => {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollAnimation();

  // These would typically come from Firebase/CMS
  const pastConcerts: PastConcert[] = [
    {
      id: '1',
      title: t('concerts.previous.concert1.title'),
      date: t('concerts.previous.concert1.date'),
      venue: t('concerts.previous.concert1.venue'),
      location: t('concerts.previous.concert1.location'),
      image: '/images/gallery/IMG_2137.jpeg',
    },
    {
      id: '2',
      title: t('concerts.previous.concert2.title'),
      date: t('concerts.previous.concert2.date'),
      venue: t('concerts.previous.concert2.venue'),
      location: t('concerts.previous.concert2.location'),
      image: '/images/concerts/past-2.jpg',
      attendees: 350,
    },
    {
      id: '3',
      title: t('concerts.previous.concert3.title'),
      date: t('concerts.previous.concert3.date'),
      venue: t('concerts.previous.concert3.venue'),
      location: t('concerts.previous.concert3.location'),
      image: '/images/concerts/past-3.jpg',
      attendees: 400,
    },
    {
      id: '4',
      title: t('concerts.previous.concert4.title'),
      date: t('concerts.previous.concert4.date'),
      venue: t('concerts.previous.concert4.venue'),
      location: t('concerts.previous.concert4.location'),
      image: '/images/concerts/past-4.jpg',
      videoUrl: '/videos/concert-4-highlights.mp4',
      attendees: 600,
    },
  ];

  return (
    <section 
      id="previous-concerts" 
      ref={ref as React.RefObject<HTMLElement>}
      className={`section-spacing bg-accent transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container-custom">
        {/* Left-Aligned Section Header */}
        <div className="content-left mb-20 lg:mb-28">
          <h2 className="section-title">
            {t('concerts.previous.title')}
          </h2>
          <p className="section-subtitle">
            {t('concerts.previous.subtitle')}
          </p>
        </div>

        {/* Concerts Grid with Staggered Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {pastConcerts.map((concert, index) => (
            <div
              key={concert.id}
              className={`group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              {/* Concert Image with Video Indicator */}
              <div className="relative h-64 bg-black/10 overflow-hidden">
                {concert.image && (
                  <Image
                    src={concert.image}
                    alt={concert.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                )}
                
                {/* Video Play Button Overlay */}
                {concert.videoUrl && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-blue rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                )}

                {/* Attendees Badge */}
                {concert.attendees && (
                  <div className="absolute bottom-3 right-3 bg-orange text-white px-3 py-1 rounded-md text-sm font-semibold">
                    {concert.attendees}+ {t('concerts.previous.attendees')}
                  </div>
                )}
              </div>

              {/* Concert Details */}
              <div className="p-5">
                <h3 className="font-serif text-xl text-black font-semibold mb-3 line-clamp-2">
                  {concert.title}
                </h3>
                
                <div className="space-y-2 text-sm text-black/70">
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <span>{concert.date}</span>
                  </div>
                  
                  <div className="flex items-start gap-2">
                    <svg className="w-4 h-4 text-blue mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <div className="font-medium text-black">{concert.venue}</div>
                      <div>{concert.location}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View Gallery Link - Left Aligned */}
        <div className="content-left mt-16">
          <a
            href="/gallery"
            className="inline-flex items-center gap-3 text-blue hover:text-blue-dark font-sans font-medium text-lg transition-colors"
          >
            {t('concerts.previous.viewGallery')}
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

