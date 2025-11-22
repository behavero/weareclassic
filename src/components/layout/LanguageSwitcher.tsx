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
    <button
      onClick={toggleLanguage}
      className={`flex items-center gap-2 px-4 py-2 rounded-md border-2 transition-all duration-200 font-sans font-medium text-sm ${
        isScrolled
          ? 'border-blue text-blue hover:bg-blue hover:text-white'
          : 'border-white text-white hover:bg-white hover:text-black'
      }`}
      aria-label="Switch language"
    >
      <span className="uppercase font-semibold tracking-wider">
        {currentLanguage}
      </span>
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
        />
      </svg>
    </button>
  );
};
