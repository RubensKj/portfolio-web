import React from 'react';

// Context
import { AuthProvider } from './contexts/auth';
import { LoadingProvider } from './contexts/loading';

// Routes
import Routes from './routes';

// Components
import Header from './components/Header';

// Styles
import Global from './styles/global';

const App: React.FC = () => {
  return (
    <LoadingProvider>
      <AuthProvider>
        <Header />
        <Routes />
        <Global />
      </AuthProvider>
    </LoadingProvider>
  );
}

export default App;
