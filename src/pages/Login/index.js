import React from 'react';

// Components
import CommandPrompt from '../../components/CommandPrompt';
import LoginForm from '../../components/LoginForm';

// Styles
import { Container } from './styles';

export default function Login() {
  return (
    <Container>
      <CommandPrompt command='npm start login'>
        <LoginForm />
      </CommandPrompt>
    </Container>
  );
}
