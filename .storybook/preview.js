import i18n from "./i18n";
import '../src/index.css';

export const parameters = {
  i18n,
  locale: 'en',
  locales: {
    en: {title:'English', left: '🇬🇧'},
    it: {title:'Italiana', left: '🇮🇹'},
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}