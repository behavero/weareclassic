import React from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import Link from 'next/link';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface CommunityConcert {
  id: string;
  type: 'kindergarten' | 'elderly';
  title: string;
  description: string;
  image: string;
  stats: {
    venues: number;
    participants: number;
    concerts: number;
  };
}

export const CommunityConcerts: React.FC = () => {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollAnimation();

  const communityPrograms: CommunityConcert[] = [
    {
      id: 'kindergarten',
      type: 'kindergarten',
      title: t('concerts.community.kindergarten.title'),
      description: t('concerts.community.kindergarten.description'),
      image: '/images/gallery/incoming pictures.jpg',
      stats: {
        venues: 25,
        participants: 1200,
        concerts: 40,
      },
    },
    {
      id: 'elderly',
      type: 'elderly',
      title: t('concerts.community.elderly.title'),
      description: t('concerts.community.elderly.description'),
      image: '/images/gallery/incoming pictures.jpg',
      stats: {
        venues: 15,
        participants: 600,
        concerts: 30,
      },
    },
  ];

  return (
    <section 
      id="community-concerts" 
      ref={ref as React.RefObject<HTMLElement>}
      className={`section-spacing bg-white transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="container-custom">
        {/* Left-Aligned Section Header */}
        <div className="content-left mb-20 lg:mb-28">
          <h2 className="section-title">
            {t('concerts.community.title')}
          </h2>
          <p className="section-subtitle">
            {t('concerts.community.subtitle')}
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
          {communityPrograms.map((program) => {
            const linkUrl = program.type === 'kindergarten' ? '/education' : '/community';
            
            return (
            <Link
              key={program.id}
              href={linkUrl}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
            >
              {/* Program Image */}
              <div className="relative h-80 bg-black/10">
                {program.image && (
                  <Image
                    src={program.image}
                    alt={program.title}
                    fill
                    className="object-cover"
                  />
                )}
                
                {/* Type Badge */}
                <div className="absolute top-4 left-4 bg-blue text-white px-4 py-2 rounded-md font-semibold flex items-center gap-2">
                  {program.type === 'kindergarten' ? (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 11.75A2.25 2.25 0 119 7.25a2.25 2.25 0 010 4.5zM10.7 14.3a2.01 2.01 0 00-1.4-.6 2.01 2.01 0 00-1.4.6C6.3 15.9 5 17.7 5 19.5V21h8v-1.5c0-1.8-1.3-3.6-2.3-5.2z" />
                    </svg>
                  )}
                  {program.type === 'kindergarten' 
                    ? t('concerts.community.kindergarten.badge')
                    : t('concerts.community.elderly.badge')
                  }
                </div>
              </div>

              {/* Program Details */}
              <div className="p-8">
                <h3 className="font-serif text-3xl text-black font-semibold mb-4">
                  {program.title}
                </h3>
                
                <p className="text-lg text-black/70 leading-relaxed mb-8">
                  {program.description}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="font-serif text-3xl font-bold text-blue mb-1">
                      {program.stats.venues}+
                    </div>
                    <div className="text-sm text-black/60 uppercase tracking-wide">
                      {t('concerts.community.stats.venues')}
                    </div>
                  </div>
                  <div className="text-center border-x border-black/10">
                    <div className="font-serif text-3xl font-bold text-blue mb-1">
                      {program.stats.participants}+
                    </div>
                    <div className="text-sm text-black/60 uppercase tracking-wide">
                      {t('concerts.community.stats.participants')}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="font-serif text-3xl font-bold text-blue mb-1">
                      {program.stats.concerts}+
                    </div>
                    <div className="text-sm text-black/60 uppercase tracking-wide">
                      {t('concerts.community.stats.concerts')}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
          })}
        </div>

        {/* Impact Statement */}
        <div className="bg-white rounded-lg p-8 lg:p-12 text-center max-w-4xl mx-auto shadow-lg">
          <svg className="w-16 h-16 text-orange mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
          
          <h3 className="font-serif text-2xl lg:text-3xl text-black font-semibold mb-4">
            {t('concerts.community.impact.title')}
          </h3>
          
          <p className="text-lg lg:text-xl text-black/70 leading-relaxed">
            {t('concerts.community.impact.description')}
          </p>
        </div>
      </div>
    </section>
  );
};

