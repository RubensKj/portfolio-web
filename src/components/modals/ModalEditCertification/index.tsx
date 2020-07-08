import React from 'react';

// Components
import ModalPrototype from '../ModalPrototype';

import { Container } from './styles';
import {
  Title, ContentForm, Text, InputArea, Input,
  TextareaArea, TextareaInput, ButtonArea, Button
} from '../../../pages/EditPortfolio/styles';

// Interfaces
import { Certification } from '../../CertificationCard';

interface IModalProps {
  certification: Certification;
  isOpen: boolean;
  setIsOpen: () => void;
}

const ModalEditCertification: React.FC<IModalProps> = ({ certification, isOpen, setIsOpen }) => {
  return (
    <ModalPrototype isOpen={isOpen} setIsOpen={setIsOpen}>
      <Container>
        <Title>Editting Certification</Title>
        <ContentForm>
          <Text>Certification Image</Text>
          <InputArea borderColor="rgba(47,45,58,0.6)">
            <Input type="file" />
          </InputArea>
          <Text>Certification Name</Text>
          <InputArea borderColor="rgba(47,45,58,0.6)">
            <Input type="text" defaultValue={certification.title} placeholder="Ex. Java 13: Tire proveito dos novos recursos da linguagem.." />
          </InputArea>
          <Text>Description</Text>
          <TextareaArea borderColor="rgba(47,45,58,0.6)">
            <TextareaInput defaultValue={certification.description} placeholder="Description" />
          </TextareaArea>
          <Text>Certification Url</Text>
          <InputArea borderColor="rgba(47,45,58,0.6)">
            <Input type="text" defaultValue={certification.certification_url} placeholder="https://cursos.alura.com.br/degree/certificate/id-certificate" />
          </InputArea>
          <ButtonArea>
            <Button>Add</Button>
          </ButtonArea>
        </ContentForm>
      </Container>
    </ModalPrototype>
  );
}

export default ModalEditCertification;