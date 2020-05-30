import styled from 'styled-components';

import { Props } from './index';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  top: ${(props: Props) => props.top ? props.top + 'px' : '0px'};
  right: ${(props: Props) => props.right ? props.right + 'px' : '0px'};
  left: ${(props: Props) => props.left ? props.left + 'px' : '0px'};
  bottom: ${(props: Props) => props.bottom ? props.bottom + 'px' : '0px'};
`;

export const BarDiv = styled.div`
  width: ${(props: Props) => props.width ? props.width + 'px' : '20px'};
  height: ${(props: Props) => props.height ? props.height + 'px' : '4px'};
  background: ${(props: Props) => props.background ? props.background : '#5a5e73'};;
  border-radius: 5px;
`;

