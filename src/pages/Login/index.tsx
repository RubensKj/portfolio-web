import React from 'react';

// Components
import CommandPrompt from '../../components/CommandPrompt';
import LoginForm from '../../components/LoginForm';

// Styles
import { Container } from './styles';

const Login: React.FC = () => {
  return (
    <Container>
      <CommandPrompt command='npm start login'>
        <LoginForm />
      </CommandPrompt>
    </Container>
  );
}

export default Login;