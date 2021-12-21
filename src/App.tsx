import React from 'react';

import i18n from 'utils/Translations/config';
import { Languages } from 'utils/Types';
import { AppContext, IAppContext } from './AppContext';

import { Home } from 'ux/pages/Home';

function App() {
  const [loading, setLoading] = React.useState<boolean>(true);
  const [windowWidth, setWindowWidth] = React.useState<number>(window.innerWidth);

  function changeLanguage(lang: Languages) {
    i18n.changeLanguage(lang);
  }

  React.useEffect(() => {
    // do something
    setLoading(false);

    window.addEventListener('resize', resize);

    return () => {
      window.removeEventListener('resize', resize);
    }
  }, []);

  function resize() {
    setWindowWidth(window.innerWidth);
  }

  const provides: IAppContext = {
    loading,
    changeLanguage,
    windowWidth,
  };

  return (
    <AppContext.Provider value={provides}>
      <Home />
    </AppContext.Provider>
  );
}

export default App;
