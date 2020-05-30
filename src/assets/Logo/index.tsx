import React from 'react';

// Assets
import CodeIcon from '../CodeIcon';

// Styles
import { Container, LogoText } from './styles';

const Logo: React.FC = () => {
  return (
    <Container>
      <CodeIcon size={18} />
      <LogoText>RubensKj</LogoText>
    </Container>
  );
}

export default Logo;