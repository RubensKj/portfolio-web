import React from 'react';

import TransitionText from '../../components/TransitionText';
import ListCertifications from '../../components/ListCertifications';

import { Container } from './styles';

const Certifications: React.FC = () => {
  return (
    <Container>
      <TransitionText
        title="Here are all my certifications"
        description="These are my certifications that I got until now, more are coming (And projects are too :))"
        marginTop={0}
      />
      <ListCertifications list={[]} />
    </Container>
  );
}

export default Certifications;