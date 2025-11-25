import React from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/Button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export const PartnersSponsors: React.FC = () => {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollAnimation();

  // Partner/sponsor data with real partners
  const partners = [
    { 
      name: 'Luminis', 
      logo: '/images/sponsors/Luminis_dark.png',
      url: 'https://www.luminis.ro/'
    },
    { 
      name: 'Behave', 
      logo: '/images/sponsors/behave-logo-dark.svg',
      url: 'https://behave.ro/'
    },
    { 
      name: 'PlaCello', 
      logo: '/images/sponsors/PlaCello-logo.png',
      url: null  // Add website URL if available
    },
    { name: 'Partner 4', logo: '/images/sponsors/partner-4.png', url: null },
    { name: 'Partner 5', logo: '/images/sponsors/partner-5.png', url: null },
    { name: 'Partner 6', logo: '/images/sponsors/partner-6.png', url: null },
  ];

  return (
    <section 
      id="partners" 
      ref={ref as React.RefObject<HTMLElement>}
      className={`section-spacing bg-white relative overflow-hidden transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-beige/20 rounded-full blur-3xl -z-10" />
      
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left: Text Content */}
          <div className="content-left">
            <h2 className="section-title mb-8">
              {t('partners.title')}
            </h2>
            <p className="section-subtitle mb-10">
              {t('partners.subtitle')}
            </p>
            <Link href="/contact">
              <Button variant="accent" size="lg" className="group">
                {t('header.cta')}
                <svg 
                  className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Button>
            </Link>
          </div>

          {/* Right: Circular Partner Logos - Organic Grid */}
          <div className="relative">
            {/* Organic, offset grid layout */}
            <div className="grid grid-cols-3 gap-6 lg:gap-8">
              {partners.map((partner, index) => {
                // Create organic offset pattern
                const offsetClasses = [
                  'lg:translate-y-0',     // Top row left
                  'lg:-translate-y-4',    // Top row center
                  'lg:translate-y-2',     // Top row right
                  'lg:translate-y-4',     // Bottom row left
                  'lg:translate-y-0',     // Bottom row center
                  'lg:-translate-y-2',    // Bottom row right
                ];
                
                const isRealPartner = partner.name === 'Luminis' || partner.name === 'Behave' || partner.name === 'PlaCello';
                
                const content = (
                  <div className="relative w-full aspect-square group">
                    <div className="absolute inset-0 rounded-full bg-white border-2 border-beige group-hover:border-blue transition-all duration-300 shadow-md hover:shadow-xl flex items-center justify-center overflow-hidden">
                      {/* Hover gradient overlay */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue/0 to-orange/0 group-hover:from-blue/5 group-hover:to-orange/5 transition-all duration-500" />
                      
                      {/* Real partner logos */}
                      {isRealPartner ? (
                        <div className="relative w-2/3 h-2/3 z-10">
                          <Image
                            src={partner.logo}
                            alt={partner.name}
                            fill
                            className="object-contain filter grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                          />
                        </div>
                      ) : (
                        /* Placeholder content */
                        <div className="relative z-10 text-center p-4">
                          <div className="font-headline text-sm lg:text-base text-black/40 group-hover:text-blue transition-colors duration-300">
                            {partner.name}
                          </div>
                        </div>
                      )}
                    </div>
                    
                    {/* Decorative ring on hover */}
                    <div className="absolute inset-0 rounded-full border-2 border-orange scale-0 group-hover:scale-110 opacity-0 group-hover:opacity-30 transition-all duration-500" />
                  </div>
                );
                
                return (
                  <div
                    key={index}
                    className={`flex items-center justify-center transition-all duration-500 ${
                      isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                    } ${offsetClasses[index]}`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    {partner.url ? (
                      <Link 
                        href={partner.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="block w-full"
                      >
                        {content}
                      </Link>
                    ) : (
                      content
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
