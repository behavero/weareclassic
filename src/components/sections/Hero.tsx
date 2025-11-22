import React from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import { Button } from '../ui/Button';

export const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
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
          {/* Hero Headline - GFS Didot */}
          <h1 className="font-headline text-5xl sm:text-6xl lg:text-7xl text-white font-semibold leading-tight mb-8">
            {t('hero.headline')}
          </h1>
          
          {/* Subheadline - Inter */}
          <p className="font-sans text-lg lg:text-xl text-white/90 leading-relaxed mb-10 max-w-2xl">
            {t('hero.subheadline')}
          </p>

          {/* Primary CTA - Blue Button */}
          <div className="flex gap-6">
            <Link href="/contact">
              <Button variant="primary" size="lg">
                {t('hero.cta')}
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
