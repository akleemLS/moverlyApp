import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import en from '../locales/en/translation.json';
import de from '../locales/de/translation.json';

const LANGUAGE_KEY = 'appLanguage';

i18n.use(initReactI18next)
  .init({
    compatibilityJSON: 'v3',
    fallbackLng: 'en',
    resources: {
      en: { translation: en },
      de: { translation: de },
    },
    lng: 'en', // default language
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });

// Load language from AsyncStorage on startup
export const loadLanguage = async () => {
  const language = await AsyncStorage.getItem(LANGUAGE_KEY);
  if (language) {
    i18n.changeLanguage(language);
  }
};
loadLanguage();

export const changeLanguage = async (language) => {
  await AsyncStorage.setItem(LANGUAGE_KEY, language);
  i18n.changeLanguage(language);
};

export default i18n;
