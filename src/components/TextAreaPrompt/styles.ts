import styled from 'styled-components';

interface Props {
  maxWidth?: number;
  maxHeight?: number;
}

export const Container = styled.div<Props>`
  max-width: ${props => props.maxWidth ? props.maxWidth + 'px' : '230px'};
  max-height: ${props => props.maxHeight ? props.maxHeight + 'px' : '230px'};
  width: 100% !important;
  height: 100%;

  margin-bottom: 6px;

  textarea {
    max-width: ${props => props.maxWidth ? props.maxWidth + 'px' : '230px'};
    max-height: ${props => props.maxHeight ? props.maxHeight + 'px' : '230px'};
    min-width: 100%;
    width: 100%;
    height: 100%;

    min-height: 70px;

    padding: 5px 10px;

    font-size: 13px;
    color: #8492A6;
    font-family: 'Source Code Pro', monospace;

    border: 1px dashed #8492A6;
    background-color: #141729;
  }
`;
