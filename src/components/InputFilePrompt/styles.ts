import styled from 'styled-components';

interface IPropsStyles {
  placeHolder?: string;
  maxWidth?: number;
}

export const Container = styled.div<IPropsStyles>`
  max-width: ${props => props.maxWidth ? props.maxWidth + 'px' : '230px'}; 
  width: 100%;

  margin-bottom: 6px;
  
  input {
    max-width: ${props => props.maxWidth ? props.maxWidth + 'px' : '230px'}; 
    width: 100%;

    font-size: 13px;
    color: #8492A6;
    font-family: 'Source Code Pro', monospace;

    border: 1px dashed #8492A6;
    background-color: #141729;
    padding: 5px 10px;
  }
`;
