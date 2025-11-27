import React from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import Link from 'next/link';

interface TeachingMethod {
  id: string;
  icon: string;
  title: string;
  description: string;
}

export const EducationProgram: React.FC = () => {
  const { t } = useTranslation();

  const teachingMethods: TeachingMethod[] = [
    {
      id: '1',
      icon: '🎵',
      title: t('education.methods.method1.title'),
      description: t('education.methods.method1.description'),
    },
    {
      id: '2',
      icon: '🎭',
      title: t('education.methods.method2.title'),
      description: t('education.methods.method2.description'),
    },
    {
      id: '3',
      icon: '🎨',
      title: t('education.methods.method3.title'),
      description: t('education.methods.method3.description'),
    },
    {
      id: '4',
      icon: '🎪',
      title: t('education.methods.method4.title'),
      description: t('education.methods.method4.description'),
    },
    {
      id: '5',
      icon: '🌟',
      title: t('education.methods.method5.title'),
      description: t('education.methods.method5.description'),
    },
    {
      id: '6',
      icon: '❤️',
      title: t('education.methods.method6.title'),
      description: t('education.methods.method6.description'),
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
              {t('education.hero.badge')}
            </span>
            <h1 className="font-headline text-5xl sm:text-6xl lg:text-7xl text-white font-semibold leading-tight mb-8">
              {t('education.hero.title')}
            </h1>
            <p className="font-sans text-lg lg:text-xl text-white/90 leading-relaxed mb-10 max-w-2xl">
              {t('education.hero.subtitle')}
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-24 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-4xl lg:text-5xl font-bold text-black mb-8">
              {t('education.mission.title')}
            </h2>
            <p className="font-sans text-xl text-black/70 leading-relaxed">
              {t('education.mission.description')}
            </p>
          </div>
        </div>
      </section>

      {/* Teaching Methods Grid */}
      <section className="py-32 bg-beige">
        <div className="container-custom">
          <div className="text-center mb-20">
            <h2 className="font-display text-5xl font-bold text-black mb-6">
              {t('education.methods.title')}
            </h2>
            <p className="font-sans text-xl text-black/60 max-w-3xl mx-auto">
              {t('education.methods.subtitle')}
            </p>
          </div>

          {/* Methods Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {teachingMethods.map((method) => (
              <div
                key={method.id}
                className="bg-white rounded-2xl p-10 text-center shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                {/* Circular Icon */}
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-orange to-orange/70 flex items-center justify-center text-4xl shadow-lg">
                  {method.icon}
                </div>

                <h3 className="font-display text-2xl font-semibold text-black mb-4">
                  {method.title}
                </h3>
                <p className="font-sans text-base text-black/70 leading-relaxed">
                  {method.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Kindergarten Ateliers Section */}
      <section className="py-32 bg-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image */}
            <div className="relative h-96 lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/education/kindergarten-workshop.jpg"
                alt="Children enjoying classical music workshop"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Content */}
            <div>
              <div className="inline-block px-4 py-2 bg-orange/10 rounded-full mb-6">
                <p className="font-sans text-sm font-semibold text-orange uppercase tracking-wider">
                  {t('education.kindergarten.badge')}
                </p>
              </div>
              <h2 className="font-display text-5xl font-bold text-black mb-6">
                {t('education.kindergarten.title')}
              </h2>
              <p className="font-sans text-xl text-black/70 leading-relaxed mb-8">
                {t('education.kindergarten.description')}
              </p>

              {/* Key Features */}
              <div className="space-y-4 mb-10">
                {[1, 2, 3, 4].map((num) => (
                  <div key={num} className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-orange flex items-center justify-center text-white font-bold">
                      ✓
                    </div>
                    <p className="font-sans text-lg text-black/80">
                      {t(`education.kindergarten.feature${num}`)}
                    </p>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-orange text-white font-sans font-semibold rounded-md hover:scale-105 hover:shadow-xl transition-all duration-300"
              >
                {t('education.kindergarten.cta')}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-24 bg-blue text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl mx-auto text-center">
            <div>
              <div className="font-display text-6xl font-bold mb-4">
                {t('education.impact.stat1.number')}
              </div>
              <p className="font-sans text-xl">
                {t('education.impact.stat1.label')}
              </p>
            </div>
            <div>
              <div className="font-display text-6xl font-bold mb-4">
                {t('education.impact.stat2.number')}
              </div>
              <p className="font-sans text-xl">
                {t('education.impact.stat2.label')}
              </p>
            </div>
            <div>
              <div className="font-display text-6xl font-bold mb-4">
                {t('education.impact.stat3.number')}
              </div>
              <p className="font-sans text-xl">
                {t('education.impact.stat3.label')}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32 bg-gradient-to-br from-beige to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="font-display text-5xl font-bold text-black mb-8">
              {t('education.finalCta.title')}
            </h2>
            <p className="font-sans text-xl text-black/70 leading-relaxed mb-12">
              {t('education.finalCta.description')}
            </p>
            <div className="flex justify-center">
              <Link
                href="/contact"
                className="inline-block px-10 py-5 bg-orange text-white font-sans font-semibold text-lg rounded-md hover:scale-105 hover:shadow-xl transition-all duration-300"
              >
                {t('education.finalCta.primaryButton')}
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

