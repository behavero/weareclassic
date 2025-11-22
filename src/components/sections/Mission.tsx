import React from 'react';
import { useTranslation } from 'react-i18next';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export const Mission: React.FC = () => {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollAnimation();

  const values = [
    {
      title: t('mission.values.excellence.title'),
      description: t('mission.values.excellence.description'),
    },
    {
      title: t('mission.values.education.title'),
      description: t('mission.values.education.description'),
    },
    {
      title: t('mission.values.community.title'),
      description: t('mission.values.community.description'),
    },
  ];

  return (
    <section 
      id="mission" 
      ref={ref as React.RefObject<HTMLElement>}
      className={`relative section-spacing bg-accent overflow-hidden transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Layered Background Effect - Subtle offset beige layer */}
      <div className="absolute inset-0 bg-beige -z-10" />
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-beige-dark/30 to-transparent -z-10" />
      
      <div className="container-custom relative z-10">
        {/* Left-Aligned Title Block */}
        <div className="content-left mb-20 lg:mb-28">
          <h2 className="section-title">
            {t('mission.title')}
          </h2>
          <p className="section-subtitle mb-16">
            {t('mission.statement')}
          </p>
        </div>

        {/* Values Grid - Simple & Elegant with Numbered Sections */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 lg:gap-x-16 gap-y-16 lg:gap-y-20">
          {values.map((value, index) => (
            <div 
              key={index} 
              className={`content-left transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Simple numbered badge */}
              <div className="flex items-center mb-8">
                <div className="w-14 h-14 rounded-full bg-orange text-beige text-2xl font-bold flex items-center justify-center shadow-sm">
                  {index + 1}
                </div>
              </div>
              
              <h3 className="font-headline text-3xl lg:text-4xl text-black font-semibold mb-6 leading-tight">
                {value.title}
              </h3>
              <p className="font-sans text-lg lg:text-xl text-black/70 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
