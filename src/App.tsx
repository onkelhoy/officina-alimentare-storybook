import React from 'react';

import i18n from 'utils/Translations/config';
import { Languages } from 'utils/Types';
import { AppContext, IAppContext } from './AppContext';

import { Home } from 'ux/pages/Home';

function App() {
  const [loading, setLoading] = React.useState<boolean>(true);

  function changeLanguage(lang: Languages) {
    i18n.changeLanguage(lang);
  }

  React.useEffect(() => {
    // do something
    setLoading(false);
  }, []);

  const provides: IAppContext = {
    loading,
    changeLanguage,
  };

  return (
    <AppContext.Provider value={provides}>
      <Home />
    </AppContext.Provider>
  );
}

export default App;
