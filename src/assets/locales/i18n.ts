import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './translation_en.json';
import translationCH from './translation_ch.json';

const resources = { // 'translation' must be added
  en: {
    translation: translationEN
  },
  ch: {
    translation: translationCH
  }
};

i18n
 .use(initReactI18next) // passes i18n down to react-i18next
 .init({
  compatibilityJSON: 'v3', //To make it work for Android devices, add this line.
  resources,
  fallbackLng: 'en', // default language to use.
  // if you're using a language detector, do not define the lng option
interpolation: {
   escapeValue: false,
  },
 });
export default i18n;