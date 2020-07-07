import React from 'react';

// Assets
import CertificationIcon from '../../../assets/CertificationIcon';

// Interfaces
import { Certification } from '../../CertificationCard';
import ModalPrototype from '../ModalPrototype';

import {
  Container, ImageArea, Image, HeaderProject,
  Separator, Title, Description, Footer, Redirect,
  Comentary
} from './styles';

interface IModalProps {
  certification: Certification;
  isOpen: boolean;
  setIsOpen: () => void;
}

const ModalCertification: React.FC<IModalProps> = ({ certification, isOpen, setIsOpen }) => {
  return (
    <ModalPrototype isOpen={isOpen} setIsOpen={setIsOpen}>
      <Container>
        <ImageArea>
          <Image src={certification.image} alt="Certification Image" />
        </ImageArea>
        <Separator />
        <HeaderProject>
          <Title>"{certification.title}"</Title>
          {certification.description && (
            <Description>{certification.description}</Description>
          )}
        </HeaderProject>
      </Container>
      <Footer>
        <Separator />
        <Redirect target="_blank" href={certification.certification_url} >
          <CertificationIcon size={15} fill="#5972A4" />
          <Comentary>Access certicate url</Comentary>
        </Redirect>
      </Footer>
    </ModalPrototype>
  );
}

export default ModalCertification;