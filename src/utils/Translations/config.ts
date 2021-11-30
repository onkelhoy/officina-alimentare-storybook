// import { initReactI18next } from "react-i18next";
import i18next from "i18next";
import it from './it.json';
import en from './en.json';
import { initReactI18next } from "react-i18next";

export const resources = {
  en: {
    translation: en
  },
  it: {
    translation: it
  }
} as const;

i18next
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "it",
    fallbackLng: "it",
    // keySeparator: true, // we do not use keys in form messages.welcome
    interpolation: {
      escapeValue: false
    }
  }, function (err, res) {
    if (err) console.error(err);
    else {
      console.log('i18next loaded successfully');
    }
  });

export default i18next;