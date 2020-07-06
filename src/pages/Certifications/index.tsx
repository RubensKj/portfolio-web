import React, { useState, useEffect } from 'react';

// Services
import api from '../../services/api';

// Components
import TransitionText from '../../components/TransitionText';
import ListCertifications from '../../components/ListCertifications';
import { Certification } from '../../components/CertificationCard';

import { Container } from './styles';

const Certifications: React.FC = () => {
  const [certifications, setCertifications] = useState<Certification[]>([]);

  useEffect(() => {
    async function getCertifications(): Promise<void> {
      const response = await api.get('certifications');

      setCertifications(response.data);
    }

    getCertifications();
  }, []);

  return (
    <Container>
      <TransitionText
        title="Here are all my certifications"
        description="These are my certifications that I got until now, more are coming (And projects are too :))"
        marginTop={0}
      />
      <ListCertifications list={certifications} />
    </Container>
  );
}

export default Certifications;