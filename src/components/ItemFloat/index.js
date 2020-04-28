import React from 'react';

import { Container } from './styles';

export default function ItemFloat({ image, top, left, right, bottom, width, height, background, isAnimationToUp }) {
  return (
    <Container top={top} left={left} right={right} bottom={bottom} width={width} height={height} background={background} isAnimationToUp={isAnimationToUp}>
      {image ? image : 'Put something in here'}
    </Container>
  );
}
