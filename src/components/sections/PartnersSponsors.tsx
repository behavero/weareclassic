import React from 'react';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/Button';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

export const PartnersSponsors: React.FC = () => {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollAnimation();

  // Real partner data with clickable links
  const partners = [
    { 
      name: 'Luminis', 
      logo: '/images/sponsors/Luminis_dark.png',
      website: 'https://www.luminis.ro/'
    },
    { 
      name: 'Behave', 
      logo: '/images/sponsors/behave-logo-dark.svg',
      website: 'https://behave.ro/'
    },
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

          {/* Right: Circular Partner Logos - Two Column Layout */}
          <div className="relative">
            {/* Two column grid for partners */}
            <div className="grid grid-cols-2 gap-8 lg:gap-12 max-w-md mx-auto">
              {partners.map((partner, index) => {
                // Create subtle offset pattern
                const offsetClasses = [
                  'lg:translate-y-0',     // Left
                  'lg:-translate-y-4',    // Right (slightly higher)
                ];
                
                return (
                  <a
                    key={index}
                    href={partner.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex items-center justify-center transition-all duration-500 ${
                      isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                    } ${offsetClasses[index]}`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    {/* Circular container with sophisticated hover */}
                    <div className="relative w-full aspect-square">
                      <div className="absolute inset-0 rounded-full bg-white border-2 border-beige group-hover:border-blue transition-all duration-300 shadow-md hover:shadow-xl flex items-center justify-center overflow-hidden p-6">
                        {/* Hover gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-blue/0 to-orange/0 group-hover:from-blue/5 group-hover:to-orange/5 transition-all duration-500" />
                        
                        {/* Partner logo */}
                        <div className="relative w-full h-full z-10 flex items-center justify-center">
                          <Image
                            src={partner.logo}
                            alt={partner.name}
                            fill
                            className="object-contain p-4 filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                          />
                        </div>
                      </div>
                      
                      {/* Decorative ring on hover */}
                      <div className="absolute inset-0 rounded-full border-2 border-orange scale-0 group-hover:scale-110 opacity-0 group-hover:opacity-30 transition-all duration-500" />
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
