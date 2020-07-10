import React from 'react';

// Components
import ModalPrototype from '../ModalPrototype';

import { Container } from './styles';
import {
  Title, ContentForm, Text, InputArea, Input,
  TextareaArea, TextareaInput, ButtonArea, Button
} from '../../../pages/EditPortfolio/styles';

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
          <Text>Project Images</Text>
          <InputArea borderColor="rgba(47,45,58,0.6)">
            <Input type="file" />
          </InputArea>
          <Text>Project Name</Text>
          <InputArea borderColor="rgba(47,45,58,0.6)">
            <Input type="text" defaultValue={project.name} placeholder="Ex. Petcare API" />
          </InputArea>
          <Text>Language</Text>
          <InputArea borderColor="rgba(47,45,58,0.6)">
            <Input type="text" defaultValue={project.language} placeholder="Ex. Java" />
          </InputArea>
          <Text>Description</Text>
          <TextareaArea borderColor="rgba(47,45,58,0.6)">
            <TextareaInput defaultValue={project.description} placeholder="Description" />
          </TextareaArea>
          <Text>Project Url</Text>
          <InputArea borderColor="rgba(47,45,58,0.6)">
            <Input type="text" placeholder="Ex. https://rubenskj.com/" />
          </InputArea>
          <Text>Github Url</Text>
          <InputArea borderColor="rgba(47,45,58,0.6)">
            <Input type="text" defaultValue={project.githubUrl} placeholder="https://cursos.alura.com.br/degree/certificate/id-certificate" />
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