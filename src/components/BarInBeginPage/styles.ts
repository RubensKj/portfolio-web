import styled from 'styled-components';

import { Props } from './index';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  bottom: 22px;
`;

export const Bar = styled.div`
  width: ${(props: Props) =>props.width + 'px'};
  height: 6px;
  background: ${(props: Props) => props.color ? props.color : "#00cc74"};
  border-radius: 5px;  
`;