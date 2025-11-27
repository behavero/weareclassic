import React from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/Button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export const ArtistsCatalog: React.FC = () => {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollAnimation();

  const artists = [
    {
      name: t('artists.roster.artist1.name'),
      instrument: t('artists.roster.artist1.instrument'),
      bio: t('artists.roster.artist1.bio'),
      image: '/images/artists/placeholder-artist-1.jpg',
      achievements: [
        t('artists.roster.artist1.achievement1'),
        t('artists.roster.artist1.achievement2'),
      ],
      category: 'young-talent',
    },
    {
      name: t('artists.roster.artist2.name'),
      instrument: t('artists.roster.artist2.instrument'),
      bio: t('artists.roster.artist2.bio'),
      image: '/images/artists/placeholder-artist-2.jpg',
      achievements: [
        t('artists.roster.artist2.achievement1'),
        t('artists.roster.artist2.achievement2'),
      ],
      category: 'young-talent',
    },
    {
      name: t('artists.roster.artist3.name'),
      instrument: t('artists.roster.artist3.instrument'),
      bio: t('artists.roster.artist3.bio'),
      image: '/images/artists/placeholder-artist-3.jpg',
      achievements: [
        t('artists.roster.artist3.achievement1'),
        t('artists.roster.artist3.achievement2'),
      ],
      category: 'young-talent',
    },
    {
      name: t('artists.roster.artist4.name'),
      instrument: t('artists.roster.artist4.instrument'),
      bio: t('artists.roster.artist4.bio'),
      image: '/images/artists/placeholder-artist-4.jpg',
      achievements: [
        t('artists.roster.artist4.achievement1'),
        t('artists.roster.artist4.achievement2'),
      ],
      category: 'young-talent',
    },
    {
      name: t('artists.roster.artist5.name'),
      instrument: t('artists.roster.artist5.instrument'),
      bio: t('artists.roster.artist5.bio'),
      image: '/images/artists/placeholder-artist-5.jpg',
      achievements: [
        t('artists.roster.artist5.achievement1'),
        t('artists.roster.artist5.achievement2'),
      ],
      category: 'established',
    },
    {
      name: t('artists.roster.artist6.name'),
      instrument: t('artists.roster.artist6.instrument'),
      bio: t('artists.roster.artist6.bio'),
      image: '/images/artists/placeholder-artist-6.jpg',
      achievements: [
        t('artists.roster.artist6.achievement1'),
        t('artists.roster.artist6.achievement2'),
      ],
      category: 'established',
    },
  ];

  return (
    <section
      id="artists-catalog"
      ref={ref as React.RefObject<HTMLElement>}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Hero Banner */}
      <div className="relative min-h-screen flex items-center overflow-hidden">
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
              {t('artists.hero.badge')}
            </span>
            <h1 className="font-headline text-5xl sm:text-6xl lg:text-7xl text-white font-semibold leading-tight mb-8">
              {t('artists.hero.headline')}
            </h1>
            <p className="font-sans text-lg lg:text-xl text-white/90 leading-relaxed mb-10 max-w-2xl">
              {t('artists.hero.subtitle')}
            </p>
          </div>
        </div>
      </div>

      {/* Mission Statement */}
      <div className="section-spacing bg-white">
        <div className="container-custom text-center max-w-4xl mx-auto">
          <h2 className="section-title text-primary-blue mb-6">
            {t('artists.mission.title')}
          </h2>
          <p className="text-xl text-black/70 leading-relaxed">
            {t('artists.mission.description')}
          </p>
        </div>
      </div>

      {/* Artists Grid */}
      <div className="section-spacing bg-beige">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="section-title text-black mb-4">
              {t('artists.roster.title')}
            </h2>
            <p className="section-subtitle max-w-3xl mx-auto">
              {t('artists.roster.subtitle')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
            {artists.map((artist, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                {/* Artist Image */}
                <div className="relative h-80 bg-black/5">
                  <Image
                    src={artist.image}
                    alt={artist.name}
                    fill
                    className="object-cover"
                  />
                  {/* Category Badge */}
                  {artist.category === 'young-talent' && (
                    <div className="absolute top-4 right-4 bg-orange text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {t('artists.roster.youngTalentBadge')}
                    </div>
                  )}
                </div>

                {/* Artist Info */}
                <div className="p-6">
                  <h3 className="font-serif text-3xl text-black font-semibold mb-2">
                    {artist.name}
                  </h3>
                  <p className="font-sans text-lg text-orange font-medium mb-4">
                    {artist.instrument}
                  </p>
                  <p className="text-black/70 leading-relaxed mb-6">
                    {artist.bio}
                  </p>

                  {/* Achievements */}
                  <div className="flex flex-wrap gap-2">
                    {artist.achievements.map((achievement, idx) => (
                      <span
                        key={idx}
                        className="bg-beige text-black text-xs px-3 py-1 rounded-full font-medium"
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Join Our Platform CTA */}
      <div className="section-spacing bg-beige text-center">
        <div className="container-custom max-w-3xl mx-auto">
          <h2 className="section-title text-black mb-6">
            {t('artists.joinCta.title')}
          </h2>
          <p className="text-lg text-black/70 leading-relaxed mb-10">
            {t('artists.joinCta.subtitle')}
          </p>
          <Link href="/contact">
            <Button variant="secondary" size="lg">
              {t('artists.joinCta.button')}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

