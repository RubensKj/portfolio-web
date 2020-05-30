import React from 'react';

// Routes
import Routes from './routes';

// Components
import Header from './components/Header';

// Styles
import Global from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <Routes />
      <Global />
    </>
  );
}

export default App;
