import React, { useState } from 'react';
import Main from './pages/Main/Main';
import { GlobalProvider } from './context/Context.global';

const App: React.FC = () => {
  return (
    <GlobalProvider>
      <Main />
    </GlobalProvider>
  );
};

export default App;
