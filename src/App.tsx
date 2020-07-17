import React from 'react';

// Context
import { AuthProvider } from './contexts/auth';

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
      <AuthProvider>
        <Routes />
      </AuthProvider>
      <Global />
    </>
  );
}

export default App;
