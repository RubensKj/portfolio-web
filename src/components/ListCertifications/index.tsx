import React, { useState } from 'react';

// Components
import CertificationCard from '../CertificationCard';
import ModalCertification from '../modals/ModalCertification';

// Interface
import { Certification } from '../CertificationCard';

// Styles
import { Container, List } from './styles';


interface Props {
  list: Certification[];
}

const ListCertifications: React.FC<Props> = ({ list }) => {
  const [certificationSelected, setCertificationSelected] = useState<Certification>({} as Certification);

  const [isModalCertificationOpen, setIsModalCertificationOpen] = useState<boolean>(false);

  function toggleOpenModalCertification(certificaiton: Certification): void {
    setIsModalCertificationOpen(!isModalCertificationOpen);
    setCertificationSelected(certificaiton);
  }

  return (
    <>
      <ModalCertification
        certification={certificationSelected}
        isOpen={isModalCertificationOpen}
        setIsOpen={() => toggleOpenModalCertification(certificationSelected)}
      />

      <Container>
        <List>
          {list && list.map(certification => (
            <CertificationCard key={certification.id} info={certification} onClickOpenModal={toggleOpenModalCertification} />
          ))}
        </List>
      </Container>
    </>
  );
}

export default ListCertifications;