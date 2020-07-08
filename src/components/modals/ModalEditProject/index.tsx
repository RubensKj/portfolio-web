import React from 'react';

// Components
import ModalPrototype from '../ModalPrototype';

import { Container } from './styles';
import { Title, ContentForm, Text, InputArea, Input, TextareaArea, TextareaInput, ButtonArea, Button } from '../../../pages/EditPortfolio/styles';

// Interfaces
import { Project } from '../../ProjectCard';

interface IModalProps {
  project: Project;
  isOpen: boolean;
  setIsOpen: () => void;
}

const ModalEditProject: React.FC<IModalProps> = ({ project, isOpen, setIsOpen }) => {
  return (
    <ModalPrototype isOpen={isOpen} setIsOpen={setIsOpen}>
      <Container>
        <Title>Editting Project</Title>
        <ContentForm>
          <Text>Certificate File Image</Text>
          <InputArea>
            <Input type="file" />
          </InputArea>
          <Text>Certification Name</Text>
          <InputArea>
            <Input type="text" placeholder="Ex. Java 13: Tire proveito dos novos recursos da linguagem.." />
          </InputArea>
          <Text>Description</Text>
          <TextareaArea>
            <TextareaInput placeholder="Description" />
          </TextareaArea>
          <Text>Certification Url</Text>
          <InputArea>
            <Input type="text" placeholder="https://cursos.alura.com.br/degree/certificate/id-certificate" />
          </InputArea>
          <ButtonArea>
            <Button>Add</Button>
          </ButtonArea>
        </ContentForm>
      </Container>
    </ModalPrototype>
  );
}

export default ModalEditProject;