import React from 'react';
import { useTranslation } from 'react-i18next';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export const Mission: React.FC = () => {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollAnimation();

  const values = [
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      ),
      title: t('mission.values.excellence.title'),
      description: t('mission.values.excellence.description'),
    },
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: t('mission.values.education.title'),
      description: t('mission.values.education.description'),
    },
    {
      icon: (
        <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
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

        {/* Values Grid - Left Aligned with Circular Icon Containers */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 lg:gap-x-16 gap-y-16 lg:gap-y-20">
          {values.map((value, index) => (
            <div 
              key={index} 
              className={`content-left transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Circular Icon Container with Blue Border & Orange Accent */}
              <div className="flex items-start mb-8">
                <div className="relative">
                  {/* Circular container with border */}
                  <div className="w-24 h-24 lg:w-28 lg:h-28 rounded-full bg-white border-2 border-blue flex items-center justify-center relative overflow-hidden group transition-all duration-300 hover:border-orange hover:shadow-lg">
                    {/* Subtle orange background on hover */}
                    <div className="absolute inset-0 bg-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="text-blue group-hover:text-orange transition-colors duration-300 relative z-10">
                      {value.icon}
                    </div>
                  </div>
                  {/* Decorative number badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-orange text-black text-sm font-bold flex items-center justify-center shadow-md">
                    {index + 1}
                  </div>
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
