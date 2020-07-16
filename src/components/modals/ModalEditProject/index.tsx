import React, { useRef, useCallback } from 'react';
import { FormHandles } from '@unform/core';

// Components
import ModalPrototype from '../ModalPrototype';

// Services
import api from '../../../services/api';
import { parseToCertification } from '../../../services/FormDataParser';

import Input from '../../Input';
import TextArea from '../../TextArea';

import { Container } from './styles';
import {
  Title, ContentForm, Text, Buttons, Button
} from '../../../pages/EditPortfolio/styles';

// Interfaces
import { Project } from '../../ProjectCard';
import InputFile from '../../InputFile';

interface IModalProps {
  project: Project;
  deleteProject: (projectId: Number) => void;
  setProject: (project: Project) => void;
  isOpen: boolean;
  setIsOpen: () => void;
}

const ModalEditProject: React.FC<IModalProps> = ({ project, setProject, deleteProject, isOpen, setIsOpen }) => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(
    async (data: Project) => {
      let certForm = parseToCertification(new Map(Object.entries(data)));

      api.put(`/project/${project.id}`, certForm).then(response => {
        setProject(response.data);

        setIsOpen();
      }).catch(error => {
        console.log(error);
      });
    },
    [project.id, setIsOpen, setProject],
  );

  const handleDelete = useCallback(
    async () => {
      api.delete(`/project/${project.id}`).then(response => {
        deleteProject(project.id);

        setIsOpen();
      }).catch(error => {
        console.log(error);
      });
    },
    [project.id, deleteProject, setIsOpen],
  );

  return (
    <ModalPrototype isOpen={isOpen} setIsOpen={setIsOpen}>
      <Container>
        <Title>Editting Project</Title>
        <ContentForm ref={formRef} onSubmit={handleSubmit} initialData={project}>
          <Text>Project Images</Text>
          <InputFile name="images" multiple borderColor="rgba(47,45,58,0.6)" />
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
          <Buttons>
            <Button type="button" onClick={handleDelete} background="#d84945">Delete</Button>
            <Button type="submit">Update</Button>
          </Buttons>
        </ContentForm>
      </Container>
    </ModalPrototype>
  );
}

export default ModalEditProject;