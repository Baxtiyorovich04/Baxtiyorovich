import React, { createContext, useCallback, useContext, useEffect, useMemo, useState, ReactNode } from 'react';
import { Language, TranslationSchema } from '../types';
import { TRANSLATIONS } from '../constants';

interface I18nContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationSchema;
}

const I18nContext = createContext<I18nContextType | undefined>(undefined);

const STORAGE_KEY = 'lang';
const SUPPORTED: Language[] = ['en', 'uz', 'ru'];

const isLanguage = (value: unknown): value is Language =>
  typeof value === 'string' && (SUPPORTED as string[]).includes(value);

/** Stored choice → ?lang= → browser locale → English. */
const resolveInitialLanguage = (): Language => {
  if (typeof window === 'undefined') return 'en';

  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (isLanguage(stored)) return stored;
  } catch {
    /* storage can be blocked — fall through */
  }

  const fromQuery = new URLSearchParams(window.location.search).get('lang');
  if (isLanguage(fromQuery)) return fromQuery;

  const navigatorLang = window.navigator.language.slice(0, 2).toLowerCase();
  if (isLanguage(navigatorLang)) return navigatorLang;

  return 'en';
};

export const I18nProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(resolveInitialLanguage);

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang);
    try {
      window.localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* non-fatal */
    }
  }, []);

  // Keep <html lang> honest — screen readers and search engines both read it.
  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  const value = useMemo(
    () => ({ language, setLanguage, t: TRANSLATIONS[language] }),
    [language, setLanguage],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = () => {
  const context = useContext(I18nContext);
  if (!context) throw new Error('useI18n must be used within I18nProvider');
  return context;
};
