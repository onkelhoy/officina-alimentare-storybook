import { createContext } from 'react';
import { Languages } from 'utils/Types';

export interface IAppContext {
  loading: boolean;
  changeLanguage: (lang: Languages) => void;
}

export const AppContext = createContext<IAppContext>({
  loading: true,
  changeLanguage: (lang: Languages) => null,
});
