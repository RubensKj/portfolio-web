import React, { useRef } from 'react';
import { SubmitHandler, FormHandles } from '@unform/core';

// Components
import ModalPrototype from '../ModalPrototype';

// Services
import api from '../../../services/api';

import Input from '../../Input';
import TextArea from '../../TextArea';

import { Container } from './styles';
import {
  Title, ContentForm, Text, ButtonArea, Button
} from '../../../pages/EditPortfolio/styles';

// Interfaces
import { Project } from '../../ProjectCard';

interface IModalProps {
  project: Project;
  setProject: (project: Project) => void;
  isOpen: boolean;
  setIsOpen: () => void;
}

const ModalEditProject: React.FC<IModalProps> = ({ project, setProject, isOpen, setIsOpen }) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit: SubmitHandler<FormData> = (data) => {
    api.put(`/project/${project.id}`, data).then(response => {
      setProject(response.data);

      setIsOpen();
    }).catch(error => {
      console.log(error);
    });
  };

  return (
    <ModalPrototype isOpen={isOpen} setIsOpen={setIsOpen}>
      <Container>
        <Title>Editting Project</Title>
        <ContentForm ref={formRef} onSubmit={handleSubmit} initialData={project}>
          <Text>Project Name</Text>
          <Input type="text" name="name" placeholder="Ex. Petcare API" borderColor="rgba(47,45,58,0.6)" />
          <Text>Full Name</Text>
          <Input type="text" name="fullName" placeholder="Ex. User/repoName" borderColor="rgba(47,45,58,0.6)" />
          <Text>Language</Text>
          <Input type="text" name="language" placeholder="Ex. Java" borderColor="rgba(47,45,58,0.6)" />
          <Text>Description</Text>
          <TextArea name="description" placeholder="Description" borderColor="rgba(47,45,58,0.6)" />
          <Text>Project Url</Text>
          <Input type="text" name="projectUrl" placeholder="Ex. https://rubenskj.com/" borderColor="rgba(47,45,58,0.6)" />
          <Text>Github Url</Text>
          <Input type="text" name="githubUrl" placeholder="https://cursos.alura.com.br/degree/certificate/id-certificate" borderColor="rgba(47,45,58,0.6)" />
          <ButtonArea>
            <Button type="submit">Update</Button>
          </ButtonArea>
        </ContentForm>
      </Container>
    </ModalPrototype>
  );
}

export default ModalEditProject;