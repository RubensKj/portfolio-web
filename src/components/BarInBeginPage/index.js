import React from 'react';

import { Container, Bar } from './styles';

export default function BarInBeginPage({ width, color }) {
  return (
    <Container>
      <Bar width={width} color={color} />
    </Container>
  );
}
