import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('pbm_lang') || 'en';
  });

  useEffect(() => {
    localStorage.setItem('pbm_lang', lang);
    document.documentElement.setAttribute('lang', lang);
    if (lang === 'km') {
      document.body.classList.add('lang-km');
    } else {
      document.body.classList.remove('lang-km');
    }
  }, [lang]);

  const toggleLang = () => {
    setLang((prev) => (prev === 'en' ? 'km' : 'en'));
  };

  const t = translations[lang] || translations.en;

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
