import React, { useEffect, useCallback } from 'react';

// Contexts
import { useAuth, ILoginForm } from '../../contexts/auth';

// Components
import TitleTextPrompt from '../TitleTextPrompt';
import ButtonPrompt from '../ButtonPrompt';
import InputPrompt from '../InputPrompt';

// Styles
import {
  Container, LoginArea, LoginFormArea
} from './styles';

import { ConsoleText } from '../CommandPrompt/styles';

const LoginForm: React.FC = () => {

  const { signed, login } = useAuth();

  useEffect(() => {
    if (signed) {
      // Do redirect here
    }
  }, [signed]);

  const handleSubmit = useCallback(
    async (data: ILoginForm) => {
      login(data);
    },
    [login],
  );

  return (
    <Container>
      <ConsoleText>INITIALIZING LOGIN..</ConsoleText>
      <ConsoleText>LOGIN INITILIZED.</ConsoleText>
      <LoginArea>
        <TitleTextPrompt text="LOGIN" />
        <LoginFormArea onSubmit={handleSubmit}>
          <ConsoleText>User</ConsoleText>
          <InputPrompt type="text" name="email" />
          <ConsoleText>Password</ConsoleText>
          <InputPrompt type="password" name="password" />
          <ButtonPrompt text='Login' />
        </LoginFormArea>
      </LoginArea>
    </Container>
  );
}

export default LoginForm;