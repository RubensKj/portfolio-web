import React from 'react';

import XIcon from '../../assets/XIcon';

import { Container, Text } from './styles';

const NotContentImage: React.FC = () => {
  return (
    <Container>
      <XIcon size={58} color="#e2e2e2" />
      <Text>No Image Content</Text>
    </Container>
  );
}

export default NotContentImage;