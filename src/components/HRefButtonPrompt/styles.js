import styled from 'styled-components';

export const Container = styled.a`
  text-decoration: none;
  font-size: 13px;
  color: #8492A6;
  font-family: 'Source Code Pro', monospace;

  border: 1px dashed #8492A6;
  background-color: #141729;
  padding: 5px 10px;

  margin-top: ${props => props.marginTop ? props.marginTop + 'px' : '10px'};
  cursor: pointer;
`;
