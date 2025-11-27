import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import Image from 'next/image';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Button } from '../ui/Button';

export const Header: React.FC = () => {
  const { t } = useTranslation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: t('header.nav.concerts'), href: '/concerts' },
    { label: t('header.nav.artists'), href: '/artists' },
    { label: t('header.nav.community'), href: '/community' },
    { label: t('header.nav.education'), href: '/education' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          isScrolled ? 'h-20 lg:h-24' : 'h-28 lg:h-32'
        }`}>
          {/* Logo - Larger initially, shrinks on scroll */}
          <Link href="/" className="flex items-center gap-4 transition-all duration-300">
            <div className={`relative transition-all duration-300 ${
              isScrolled 
                ? 'w-32 h-12 lg:w-40 lg:h-14' 
                : 'w-40 h-16 lg:w-52 lg:h-20'
            }`}>
              <Image
                src={isScrolled ? "/images/logos/We Are Classics blue.png" : "/images/logos/We Are Classics black.png"}
                alt="We Are Classic Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation - Minimal */}
          <nav className="hidden lg:flex items-center gap-12">
            {navItems.map((item) => {
              const isInternalLink = item.href.startsWith('/');
              
              return isInternalLink ? (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`font-sans text-base font-normal transition-colors duration-200 hover:text-blue ${
                    isScrolled ? 'text-black/80' : 'text-white/90'
                  }`}
                >
                  {item.label}
                </Link>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  className={`font-sans text-base font-normal transition-colors duration-200 hover:text-blue ${
                    isScrolled ? 'text-black/80' : 'text-white/90'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-6">
            <LanguageSwitcher isScrolled={isScrolled} />
            <Link href="/contact">
              <Button variant={isScrolled ? "secondary" : "outline"} size="md">
                {t('header.cta')}
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2"
            aria-label="Toggle menu"
          >
            <svg
              className={`w-7 h-7 ${isScrolled ? 'text-black' : 'text-white'}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-black/5">
            <nav className="flex flex-col py-6">
              {navItems.map((item) => {
                const isInternalLink = item.href.startsWith('/');
                
                return isInternalLink ? (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-6 py-4 font-sans text-base font-normal text-black hover:bg-beige hover:text-blue transition-colors"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="px-6 py-4 font-sans text-base font-normal text-black hover:bg-beige hover:text-blue transition-colors"
                  >
                    {item.label}
                  </a>
                );
              })}
              <div className="border-t border-black/5 mt-4 pt-6 px-6 flex flex-col gap-4">
                <LanguageSwitcher isScrolled={true} />
                <Link href="/contact">
                  <Button variant="primary" size="md" className="w-full">
                    {t('header.cta')}
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};
