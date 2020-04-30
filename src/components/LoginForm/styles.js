import styled from 'styled-components';

export const Container = styled.div`
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

export const LoginText = styled.span`
  font-size: 13px;
  color: #8492A6;
  font-family: 'Source Code Pro', monospace;
`;


export const LoginInputArea = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 20px;
  padding: 5px 15px;
  width: 100%;
`;

export const LoginInput = styled.input`
  max-width: 230px; 
  width: 100%;
  font-size: 13px;
  color: #8492A6;
  font-family: 'Source Code Pro', monospace;

  border: 1px dashed #8492A6;
  background-color: #141729;
  padding: 5px 10px;

  margin-bottom: 6px;
`;

export const LoginButton = styled.button`
  font-size: 13px;
  color: #8492A6;
  font-family: 'Source Code Pro', monospace;

  border: 1px dashed #8492A6;
  background-color: #141729;
  padding: 5px 10px;

  margin-top: 10px;
  cursor: pointer;
`;