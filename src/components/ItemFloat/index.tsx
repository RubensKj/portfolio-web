import React, { ReactNode } from 'react';

import { Container } from './styles';

interface Props {
  top?: number;
  bottom?: number;
  right?: number;
  left?: number;
  image: ReactNode;
  width?: number;
  height?: number;
  background?: string;
}

const ItemFloat: React.FC<Props> = ({ image, top, left, right, bottom, width, height, background }) => {
  return (
    <Container top={top} left={left} right={right} bottom={bottom} width={width} height={height} background={background}>
      {image ? image : 'Put something in here'}
    </Container>
  );
}

export default ItemFloat;
