import React from 'react';

import { Container, Bar } from './styles';

export interface Props {
  width: number;
  color?: string;
}

const BarInBeginPage: React.FC<Props> = ({ width = 20, color }) => {
  return (
    <Container>
      <Bar width={width} color={color} />
    </Container>
  );
}

export default BarInBeginPage;