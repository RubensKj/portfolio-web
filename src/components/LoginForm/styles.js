import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 0 15px;
`;

export const Wrapper = styled.div`
  max-width: 684px;
  padding-bottom: 20px;
  background-color: #141729;

  margin: 0 auto;

  border-left: 1px solid #00cc74;
  border-right: 1px solid #00cc74;
  border-bottom: 1px solid #00cc74;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  height: 36px;
  background-color: #00cc74;
  user-select: none;
`;

export const TitleArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 12px;
`;

export const Title = styled.span`
  font-size: 13px;
  color: #3C4858;
  margin-left: 4px;

  transition: 0.2s font-size;

  @media only screen and (max-width: 360px) {
    font-size: 11px;
  }
`;

export const TabButtonArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;

  svg {
    height: 100%;
    padding: 0 5px;
    cursor: pointer;
  }
`;

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
  padding: 0 6px;
  margin-left: 6px;

  transition: 0.2s padding;

  :hover {
    background: #07b369;
    cursor: pointer;
  }

  @media only screen and (max-width: 360px) {
    padding: 0 2px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: flex-start;

  width: 100%;
  height: 100%;
`;

export const ConsoleText = styled.span`
  font-size: 13px;
  color: #8492A6;
  font-family: 'Source Code Pro', monospace;
`;

export const BlankSpace = styled.br`
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