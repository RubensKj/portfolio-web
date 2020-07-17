import styled from 'styled-components';

interface IContainerProps {
  borderColor?: string;
  background?: string;
}

export const Container = styled.div<IContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  margin: 0 auto;

  border-radius: 2px;
  background: ${props => props.background ? props.background : 'transparent !important'};
  border: 2px solid ${props => props.borderColor ? props.borderColor : '#e8eaeb'};

  margin-bottom: 8px;

  max-height: 120px;
  overflow: hidden;

  input {
    padding: 5px 15px;
    width: 100%;

    background: transparent !important;
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