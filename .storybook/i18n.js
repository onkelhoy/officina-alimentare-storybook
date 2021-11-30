import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import it from '../src/utils/Translations/it.json';
import en from '../src/utils/Translations/en.json';

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources: {
      en: {
        translation: en
      },
      it: {
        translation: it
      }
    },
    lng: "it",
    fallbackLng: "it",
    // keySeparator: true, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;