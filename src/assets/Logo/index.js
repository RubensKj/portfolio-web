import React from 'react';

// Assets
import CodeIcon from '../CodeIcon';

// Styles
import { Container, LogoText } from './styles';

export default function Logo() {
  return (
    <Container>
      <CodeIcon size={18} />
      <LogoText>RubensKj</LogoText>
    </Container>
  );
}
