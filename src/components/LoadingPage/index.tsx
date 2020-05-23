import React from 'react';

import CodeIcon from '../../assets/CodeIcon';

// Styles
import { Container } from './styles'; 

const LoadingPage: React.FC = () => {
  return (
    <Container>
      <CodeIcon size={52} />
    </Container>
  );
}

export default LoadingPage;