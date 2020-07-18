import React from 'react';

// Context
import AppProvider from './contexts';

// Routes
import Routes from './routes';

// Components
import Header from './components/Header';

// Styles
import Global from './styles/global';

const App: React.FC = () => {
  return (
    <AppProvider>
      <Header />
      <Routes />
      <Global />
    </AppProvider>
  );
}

export default App;
