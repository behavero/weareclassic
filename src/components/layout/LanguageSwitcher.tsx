import React from 'react';
import { useTranslation } from 'react-i18next';
import type { Language } from '@/types';

interface LanguageSwitcherProps {
  isScrolled?: boolean;
}

export const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ isScrolled = false }) => {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language as Language;

  const toggleLanguage = () => {
    const newLang: Language = currentLanguage === 'en' ? 'ro' : 'en';
    i18n.changeLanguage(newLang);
  };

  return (
    <div className={`flex items-center gap-1 rounded-full p-1 transition-all duration-200 ${
      isScrolled
        ? 'bg-beige/30'
        : 'bg-white/10 backdrop-blur-sm'
    }`}>
      <button
        onClick={() => i18n.changeLanguage('en')}
        className={`px-4 py-1.5 rounded-full font-sans font-medium text-sm transition-all duration-200 ${
          currentLanguage === 'en'
            ? isScrolled
              ? 'bg-blue text-white shadow-sm'
              : 'bg-white text-blue shadow-sm'
            : isScrolled
              ? 'text-black/60 hover:text-black'
              : 'text-white/60 hover:text-white'
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        onClick={() => i18n.changeLanguage('ro')}
        className={`px-4 py-1.5 rounded-full font-sans font-medium text-sm transition-all duration-200 ${
          currentLanguage === 'ro'
            ? isScrolled
              ? 'bg-blue text-white shadow-sm'
              : 'bg-white text-blue shadow-sm'
            : isScrolled
              ? 'text-black/60 hover:text-black'
              : 'text-white/60 hover:text-white'
        }`}
        aria-label="Switch to Romanian"
      >
        RO
      </button>
    </div>
  );
};
