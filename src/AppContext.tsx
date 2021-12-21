import { createContext } from 'react';
import { Languages } from 'utils/Types';

export interface IAppContext {
  loading: boolean;
  changeLanguage: (lang: Languages) => void;
  windowWidth: number;
}

export const AppContext = createContext<IAppContext>({
  loading: true,
  changeLanguage: (lang: Languages) => null,
  windowWidth: window.innerWidth,
});
