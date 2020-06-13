import React from 'react';

import XIcon from '../../assets/XIcon';

import { Container, Text } from './styles';

interface Props {
  size?: number;
  color?: string;
  background?: string;
}

const NotContentImage: React.FC<Props> = ({ size = 58, color = "#e2e2e2", background = "#fafafa" }) => {
  return (
    <Container background={background}>
      <XIcon size={size} color={color} />
      <Text color={color}>No Image Content</Text>
    </Container>
  );
}

export default NotContentImage;