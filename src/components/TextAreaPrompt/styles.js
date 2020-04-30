import styled from 'styled-components';

export const Container = styled.textarea`
  max-width: ${props => props.maxWidth ? props.maxWidth + 'px' : '230px'};
  max-height: ${props => props.maxHeight ? props.maxHeight + 'px' : '230px'};
  min-height: 70px;
  width: 100% !important;
  font-size: 13px;
  color: #8492A6;
  font-family: 'Source Code Pro', monospace;

  border: 1px dashed #8492A6;
  background-color: #141729;
  padding: 5px 10px;

  margin-bottom: 6px;
`;
