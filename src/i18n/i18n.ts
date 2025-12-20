'use client';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import en from './locales/en/translation.json';
import tr from './locales/tr/translation.json';
import fa from './locales/fa/translation.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    supportedLngs: ['en', 'tr', 'fa'],
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    resources: {
      en: { translation: en },
      tr: { translation: tr },
      fa: { translation: fa },
    },
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
