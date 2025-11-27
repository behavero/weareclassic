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
      {/* Hero Banner with Secondary Orange */}
      <section className="relative pt-40 pb-32 bg-gradient-to-br from-orange via-orange/90 to-orange/80 overflow-hidden">
        {/* Decorative Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-white" />
          <div className="absolute bottom-20 right-20 w-48 h-48 rounded-full bg-white" />
          <div className="absolute top-1/2 left-1/3 w-24 h-24 rounded-full bg-white" />
        </div>

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="inline-block px-6 py-2 bg-white/20 rounded-full mb-6 backdrop-blur-sm">
              <p className="font-sans text-sm font-semibold uppercase tracking-wider">
                {t('education.hero.badge')}
              </p>
            </div>
            <h1 className="font-display text-6xl lg:text-7xl font-bold mb-8">
              {t('education.hero.title')}
            </h1>
            <p className="font-sans text-2xl lg:text-3xl leading-relaxed mb-12">
              {t('education.hero.subtitle')}
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-5 bg-white text-orange font-sans font-bold text-lg rounded-md hover:scale-105 hover:shadow-2xl transition-all duration-300"
            >
              {t('education.hero.cta')}
            </Link>
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
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="inline-block px-10 py-5 bg-orange text-white font-sans font-semibold text-lg rounded-md hover:scale-105 hover:shadow-xl transition-all duration-300"
              >
                {t('education.finalCta.primaryButton')}
              </Link>
              <a
                href="#"
                className="inline-block px-10 py-5 bg-white border-2 border-blue text-blue font-sans font-semibold text-lg rounded-md hover:scale-105 hover:shadow-xl transition-all duration-300"
              >
                {t('education.finalCta.secondaryButton')}
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

