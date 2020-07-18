import styled, { css } from 'styled-components';

interface IContainerProps {
  isFocused: boolean;
  isFilled: boolean;
  borderColor?: string;
}

export const Container = styled.div<IContainerProps>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  margin: 0 auto;

  border-radius: 2px;
  border: 2px solid ${props => props.borderColor ? props.borderColor : '#e8eaeb'};

  margin-bottom: 8px;
  ${props =>
    props.isFocused &&
    css`
      color: #ff9000;
      border-color: #ff9000;
    `}
  ${props =>
    props.isFilled &&
    css`
      color: #ff9000;
    `}
  input {
    padding: 5px 15px;
    width: 100%;

    background: transparent;
    border: none;

    color: #555;

    font: 16px 'Poppins', sans-serif;
    &::placeholder {
      color: #b7b7cc;
    }
  }
  svg {
    margin-right: 16px;
  }
`;

export const ErrorArea = styled.div`
  width: 100%;
  padding: 0 15px;

  span {
    font: 16px 'Poppins', sans-serif;
    color: #d84945 !important;
  }
`;