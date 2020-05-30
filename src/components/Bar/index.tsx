import React from 'react';

import { Container, BarDiv } from './styles';

export interface Props {
  top?: number;
  bottom?: number;
  right?: number;
  left?: number;
  width?: number;
  height?: number;
  background?: string;
}

const Bar: React.FC<Props> = ({ top, bottom, right, left, width, height, background }) => {
  return (
    <Container top={top} bottom={bottom} right={right} left={left}>
      <BarDiv width={width} height={height} background={background} />
    </Container>
  );
}

export default Bar;