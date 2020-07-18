import React, { useCallback } from 'react';
import { Redirect } from 'react-router-dom';

// Contexts
import { useAuth, ILoginForm } from '../../contexts/auth';

// Components
import CommandPrompt from '../../components/CommandPrompt';
import { ConsoleText } from '../../components/CommandPrompt/styles';
import TitleTextPrompt from '../../components/TitleTextPrompt';
import ButtonPrompt from '../../components/ButtonPrompt';
import InputPrompt from '../../components/InputPrompt';

// Styles
import { Container, ContainerLogin, LoginArea, LoginFormArea } from './styles';

interface ILoginPageProps {
  location?: object;
}

const Login: React.FC<ILoginPageProps> = ({ location }) => {
  const { signed, login } = useAuth();

  const handleSubmit = useCallback(
    async (data: ILoginForm) => {
      login(data);
    },
    [login],
  );


  if (signed) {
    return <Redirect to={{ pathname: "/", state: { from: location } }} />
  }

  return (
    <Container>
      <CommandPrompt command='npm start login'>
        <ContainerLogin>
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
        </ContainerLogin>
      </CommandPrompt>
    </Container>
  );
}

export default Login;