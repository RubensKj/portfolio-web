import React, { useRef } from 'react';
import { FormHandles } from '@unform/core';

// Components
import ModalPrototype from '../ModalPrototype';

import Input from '../../Input';
import InputFile from '../../InputFile';

import { Container } from './styles';
import {
  Title, ContentForm, Text, ButtonArea, Button
} from '../../../pages/EditPortfolio/styles';

// Interfaces
import { Certification } from '../../CertificationCard';
import TextArea from '../../TextArea';

interface IModalProps {
  certification: Certification;
  isOpen: boolean;
  setIsOpen: () => void;
}

const ModalEditCertification: React.FC<IModalProps> = ({ certification, isOpen, setIsOpen }) => {
  const formRef = useRef<FormHandles>(null);

  function handleSubmit() {

  }

  return (
    <ModalPrototype isOpen={isOpen} setIsOpen={setIsOpen}>
      <Container>
        <Title>Editting Certification</Title>
        <ContentForm ref={formRef} onSubmit={handleSubmit}>
          <Text>Certification Image</Text>
          <InputFile type="file" name="image" background="#2c2b35" borderColor="rgba(47,45,58,0.6)" />
          <Text>Certification Name</Text>
          <Input type="text" name="title" defaultValue={certification.title} placeholder="Ex. Java 13: Tire proveito dos novos recursos da linguagem.." borderColor="rgba(47,45,58,0.6)" />
          <Text>Description</Text>
          <TextArea name="description" defaultValue={certification.description} placeholder="Description" borderColor="rgba(47,45,58,0.6)" />
          <Text>Certification Url</Text>
          <Input type="text" name="certificationUrl" defaultValue={certification.certificationUrl} placeholder="https://cursos.alura.com.br/degree/certificate/id-certificate" borderColor="rgba(47,45,58,0.6)" />
          <ButtonArea>
            <Button>Add</Button>
          </ButtonArea>
        </ContentForm>
      </Container>
    </ModalPrototype>
  );
}

export default ModalEditCertification;