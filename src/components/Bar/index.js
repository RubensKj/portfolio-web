import React from 'react';

import { Container, BarDiv } from './styles';

export default function Bar({ top, bottom, right, left, width, height, background }) {
  return (
    <Container top={top} bottom={bottom} right={right} left={left}>
      <BarDiv width={width} height={height} background={background} />
    </Container>
  );
}
