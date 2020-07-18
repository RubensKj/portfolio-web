import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  background-color: #141729;
`;

export const ContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: flex-start;

  width: 100%;
  height: 100%;
`;

export const LoginArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  margin-top: 20px;
`;

export const LoginTitle = styled.h2`
  font-size: 13px;
  color: #8492A6;
  font-family: 'Source Code Pro', monospace;

  font-weight: 400;
  text-align: center;
`;

export const LoginFormArea = styled(Unform)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 20px;
  padding: 5px 15px;
  width: 100%;
`;