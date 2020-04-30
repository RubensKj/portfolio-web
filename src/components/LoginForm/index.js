import React from 'react';

// Styles
import {
  Container, LoginArea, LoginTitle, LoginText,
  LoginInputArea, LoginInput, LoginButton
} from './styles';

import { ConsoleText } from '../CommandPrompt/styles';

export default function LoginForm() {
  return (
    <Container>
      <ConsoleText>INITIALIZING LOGIN..</ConsoleText>
      <ConsoleText>LOGIN INITILIZED.</ConsoleText>
      <LoginArea>
        <LoginTitle>LOGIN</LoginTitle>
        <LoginInputArea>
          <LoginText>User</LoginText>
          <LoginInput type="text" autoComplete="true" />
          <LoginText>Password</LoginText>
          <LoginInput type="password" autoComplete="true" />
          <LoginButton>Login</LoginButton>
        </LoginInputArea>
      </LoginArea>
    </Container>
  );
}
