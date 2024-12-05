import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import AsyncStorage from '@react-native-async-storage/async-storage';
import en from '../locales/en/translation.json';
import de from '../locales/de/translation.json';

const LANGUAGE_KEY = 'appLanguage';

// Initialize i18n
const initializeI18n = async () => {
  const language = (await AsyncStorage.getItem(LANGUAGE_KEY)) || 'en'; 
  await i18n
    .use(initReactI18next) 
    .init({
      compatibilityJSON: 'v3',
      fallbackLng: 'en',
      lng: language, 
      resources: {
        en: { translation: en },
        de: { translation: de },
      },
      interpolation: {
        escapeValue: false,
      },
      react: {
        useSuspense: false, 
      },
    });
};

// Change language dynamically
const changeLanguage = async (language) => {
  await AsyncStorage.setItem(LANGUAGE_KEY, language); 
  i18n.changeLanguage(language); 
};

export { initializeI18n, changeLanguage };
export default i18n;
