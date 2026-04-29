import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'pl' | 'en';

interface LanguageContextType {
  t: (pl: string, en: string) => string;
  language: Language;
  toggleLanguage: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('pl');

  // Helper to choose text based on language
  const t = (pl: string, en: string) => (language === 'pl' ? pl : en);

  // Function to switch between languages
  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'pl' ? 'en' : 'pl'));
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};