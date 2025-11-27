import React from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import Link from 'next/link';

interface Artist {
  id: string;
  name: string;
  instrument: string;
  image: string;
  bio: string;
  achievements?: string[];
}

export const YoungTalents: React.FC = () => {
  const { t } = useTranslation();

  const youngArtists: Artist[] = [
    {
      id: '1',
      name: t('youngTalents.artists.artist1.name'),
      instrument: t('youngTalents.artists.artist1.instrument'),
      image: '/images/artists/placeholder-artist-1.jpg',
      bio: t('youngTalents.artists.artist1.bio'),
      achievements: [
        t('youngTalents.artists.artist1.achievement1'),
        t('youngTalents.artists.artist1.achievement2'),
      ],
    },
    {
      id: '2',
      name: t('youngTalents.artists.artist2.name'),
      instrument: t('youngTalents.artists.artist2.instrument'),
      image: '/images/artists/placeholder-artist-2.jpg',
      bio: t('youngTalents.artists.artist2.bio'),
      achievements: [
        t('youngTalents.artists.artist2.achievement1'),
        t('youngTalents.artists.artist2.achievement2'),
      ],
    },
    {
      id: '3',
      name: t('youngTalents.artists.artist3.name'),
      instrument: t('youngTalents.artists.artist3.instrument'),
      image: '/images/artists/placeholder-artist-3.jpg',
      bio: t('youngTalents.artists.artist3.bio'),
      achievements: [
        t('youngTalents.artists.artist3.achievement1'),
        t('youngTalents.artists.artist3.achievement2'),
      ],
    },
    {
      id: '4',
      name: t('youngTalents.artists.artist4.name'),
      instrument: t('youngTalents.artists.artist4.instrument'),
      image: '/images/artists/placeholder-artist-4.jpg',
      bio: t('youngTalents.artists.artist4.bio'),
      achievements: [
        t('youngTalents.artists.artist4.achievement1'),
        t('youngTalents.artists.artist4.achievement2'),
      ],
    },
  ];

  return (
    <section className="py-32 bg-white">
      <div className="container-custom">
        {/* Section Header with Primary Blue Background */}
        <div className="bg-blue text-white rounded-2xl px-12 py-16 mb-20">
          <div className="max-w-4xl">
            <h2 className="font-display text-5xl lg:text-6xl font-bold mb-6">
              {t('youngTalents.title')}
            </h2>
            <p className="font-sans text-xl lg:text-2xl leading-relaxed text-white/90">
              {t('youngTalents.subtitle')}
            </p>
          </div>
        </div>

        {/* Artist Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
          {youngArtists.map((artist) => (
            <div
              key={artist.id}
              className="group cursor-pointer transition-all duration-300 hover:-translate-y-2"
            >
              {/* Artist Image - Circular Crop */}
              <div className="relative w-full aspect-square mb-6 overflow-hidden rounded-full shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
                <Image
                  src={artist.image}
                  alt={artist.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-blue/0 group-hover:bg-blue/10 transition-colors duration-300" />
              </div>

              {/* Artist Info */}
              <div className="text-center">
                <h3 className="font-display text-2xl lg:text-3xl font-semibold mb-2 text-black">
                  {artist.name}
                </h3>
                <p className="font-sans text-base lg:text-lg text-orange font-medium mb-4">
                  {artist.instrument}
                </p>
                <p className="font-sans text-sm lg:text-base text-black/70 leading-relaxed mb-4">
                  {artist.bio}
                </p>

                {/* Achievements */}
                {artist.achievements && artist.achievements.length > 0 && (
                  <div className="space-y-2">
                    {artist.achievements.map((achievement, idx) => (
                      <div
                        key={idx}
                        className="inline-block px-4 py-2 bg-beige rounded-full text-xs font-sans font-medium text-black/80"
                      >
                        {achievement}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <p className="font-sans text-lg text-black/70 mb-8">
            {t('youngTalents.cta.description')}
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-orange text-white font-sans font-semibold rounded-md hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            {t('youngTalents.cta.button')}
          </Link>
        </div>
      </div>
    </section>
  );
};

