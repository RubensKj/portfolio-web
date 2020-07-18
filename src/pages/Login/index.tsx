import React, { useCallback, useRef } from 'react';
import { Redirect } from 'react-router-dom';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

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
  const formRef = useRef<FormHandles>(null);

  const { signed, login } = useAuth();

  const handleSubmit = useCallback(
    async (data: ILoginForm) => {
      try {
        const schema = Yup.object().shape({
          email: Yup.string()
            .email('E-mail invalid')
            .required('E-mail is required.'),
          password: Yup.string().required('Password is required.'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });
      } catch (error) {
        const errorMessages = {};

        if (error instanceof Yup.ValidationError) {

          error.inner.forEach(err => {
            errorMessages[err.path] = err.message;
          });

          return formRef.current?.setErrors(errorMessages);
        }
      }

      formRef.current?.setErrors({});

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
            <LoginFormArea ref={formRef} onSubmit={handleSubmit}>
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