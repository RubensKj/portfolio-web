import React, { useState, useEffect } from 'react';

// Services
import api from '../../services/api';
import { DEFAULT_ID } from '../../services/env';

// Components
import LoadingPage from '../../components/LoadingPage';
import TransitionText from '../../components/TransitionText';
import ListCertifications from '../../components/ListCertifications';

// Interfaces
import { Certification } from '../../components/CertificationCard';

import { Container } from './styles';

const Certifications: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [certifications, setCertifications] = useState<Certification[]>([]);

  useEffect(() => {
    setIsLoading(true);
    async function getCertifications(): Promise<void> {
      const response = await api.get(`/certifications/${DEFAULT_ID}`);

      setCertifications(response.data);
      setIsLoading(false);
    }

    getCertifications();
  }, []);

  return (
    <>
      {isLoading ? <LoadingPage /> : (
        <Container>
          <TransitionText
            title="Here are all my certifications"
            description="These are my certifications that I got until now, more are coming (And projects are too :))"
            marginTop={0}
          />
          <ListCertifications list={certifications} />
        </Container>
      )}
    </>
  );
}

export default Certifications;