import styled from 'styled-components';

import { Props } from './index';

export const Input = styled.input`
  max-width: ${(props: Props) => props.maxWidth ? props.maxWidth + 'px' : '230px'}; 
  width: 100%;
  font-size: 13px;
  color: #8492A6;
  font-family: 'Source Code Pro', monospace;

  border: 1px dashed #8492A6;
  background-color: #141729;
  padding: 5px 10px;

  margin-bottom: 6px;
`;
