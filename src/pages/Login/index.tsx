import React from 'react';
import { Redirect } from 'react-router-dom';

// Contexts
import { useAuth } from '../../contexts/auth';

// Components
import CommandPrompt from '../../components/CommandPrompt';
import LoginForm from '../../components/LoginForm';

// Styles
import { Container } from './styles';

interface ILoginPageProps {
  location?: object;
}

const Login: React.FC<ILoginPageProps> = ({ location }) => {
  const { signed } = useAuth();

  if (signed) {
    return <Redirect to={{ pathname: "/", state: { from: location } }} />
  }

  return (
    <Container>
      <CommandPrompt command='npm start login'>
        <LoginForm />
      </CommandPrompt>
    </Container>
  );
}

export default Login;