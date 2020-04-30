import React from 'react';

// Assets
import PromptIcon from '../../assets/PromptIcon';
import MinimizeIcon from '../../assets/MinimizeIcon';
import MaximizeIcon from '../../assets/MaximizeIcon';
import CloseIcon from '../../assets/CloseIcon';

// Styles
import {
  Container, Wrapper, Header, TitleArea, Title, TabButtonArea,
  Button, Content, ConsoleText, BlankSpace, LoginArea, LoginTitle, LoginText,
  LoginInputArea, LoginInput, LoginButton
} from './styles';

export default function LoginForm() {
  return (
    <Container>
      <Wrapper>
        <Header>
          <TitleArea>
            <PromptIcon size={15} />
            <Title>Command Prompt</Title>
          </TitleArea>
          <TabButtonArea>
            <Button>
              <MinimizeIcon />
            </Button>
            <Button>
              <MaximizeIcon size={20} />
            </Button>
            <Button>
              <CloseIcon />
            </Button>
          </TabButtonArea>
        </Header>
        <Content>
          <ConsoleText>RubensKj Portfolio [Version 10.0.38324.283]</ConsoleText>
          <ConsoleText>(C) 2020 RubensKj. All rights reserved</ConsoleText>
          <BlankSpace />
          <ConsoleText>C:\Users\RubensKj>npm start login</ConsoleText>
          <ConsoleText>INITIALIZING LOGIN..</ConsoleText>
          <ConsoleText>LOGIN INITILIZED.</ConsoleText>
          <LoginArea>
            <LoginTitle>LOGIN</LoginTitle>
            <LoginInputArea>
              <LoginText>User</LoginText>
              <LoginInput type="text" autoComplete />
              <LoginText>Password</LoginText>
              <LoginInput type="password" autoComplete />
              <LoginButton>Login</LoginButton>
            </LoginInputArea>
          </LoginArea>
        </Content>
      </Wrapper>
    </Container>
  );
}
