import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      greeting: 'Hello',
      today_is: 'Today is {{dayOfTheWeek}}.',
    },
  },
  pl: {
    translation: {
      greeting: 'Cześć',
      today_is: 'Dziś jest {{dayOfTheWeek}}.',
    },
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    supportedLngs: ['en', 'pl'],
    interpolation: {
      escapeValue: false,
    },
  });

export { i18n };
