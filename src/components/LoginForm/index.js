import React from 'react';

// Components
import TitleTextPrompt from '../TitleTextPrompt';
import ButtonPrompt from '../ButtonPrompt';
import InputPrompt from '../InputPrompt';

// Styles
import {
  Container, LoginArea, LoginFormArea
} from './styles';

import { ConsoleText } from '../CommandPrompt/styles';

export default function LoginForm() {
  return (
    <Container>
      <ConsoleText>INITIALIZING LOGIN..</ConsoleText>
      <ConsoleText>LOGIN INITILIZED.</ConsoleText>
      <LoginArea>
        <TitleTextPrompt text="LOGIN" />
        <LoginFormArea>
          <ConsoleText>User</ConsoleText>
          <InputPrompt type="text" autoComplete="true" />
          <ConsoleText>Password</ConsoleText>
          <InputPrompt type="password" autoComplete="true" />
          <ButtonPrompt text='Login' />
        </LoginFormArea>
      </LoginArea>
    </Container>
  );
}
