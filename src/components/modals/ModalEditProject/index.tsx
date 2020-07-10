import React, { useState, ChangeEvent, FormEvent } from 'react';

// Components
import ModalPrototype from '../ModalPrototype';

// Services
import api from '../../../services/api';

import { Container } from './styles';
import {
  Title, ContentForm, Text, InputArea, Input,
  TextareaArea, TextareaInput, ButtonArea, Button
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
  const [projectForm, setProjectForm] = useState<Project>(project);

  const [imagesProject, setImagesProject] = useState<FileList>({} as FileList);

  function handleSubmitProject(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!projectForm.description && projectForm.name === '') {
      return;
    }

    if (!projectForm.description && projectForm.description === '') {
      return;
    }

    let data = new FormData();

    if (imagesProject) {
      for (var i = 0; i < imagesProject.length; i++) {
        data.append('images', imagesProject[i]);
      }
    }
    data.append('name', projectForm.name);
    data.append('fullName', projectForm.fullName);
    data.append('language', projectForm.language);
    if (projectForm.description) {
      data.append('description', projectForm.description);
    }

    if (projectForm.license?.key && projectForm.license?.name && projectForm.license?.url) {
      data.append('key', projectForm.license?.key);
      data.append('name', projectForm.license?.name);
      data.append('url', projectForm.license?.url);
    }

    if (projectForm.projectUrl) {
      data.append('projectUrl', projectForm.projectUrl);
    }

    if (projectForm.githubUrl) {
      data.append('githubUrl', projectForm.githubUrl);
    }

    api.put(`/project/${project.id}`, data).then(response => {
      setProjectForm(response.data);
      setProject(response.data);

      setIsOpen();
    }).catch(error => {
      console.log(error);
    });
  }

  function handleImage(event: ChangeEvent<HTMLInputElement>): void {
    event.preventDefault();

    if (!event.target.files) {
      return;
    }

    setImagesProject(event.target.files);
  }

  return (
    <ModalPrototype isOpen={isOpen} setIsOpen={setIsOpen}>
      <Container>
        <Title>Editting Project</Title>
        <ContentForm onSubmit={handleSubmitProject}>
          <Text>Project Images</Text>
          <InputArea borderColor="rgba(47,45,58,0.6)">
            <Input type="file" onChange={handleImage} multiple />
          </InputArea>
          <Text>Project Name</Text>
          <InputArea borderColor="rgba(47,45,58,0.6)">
            <Input type="text" name="name" onChange={e => setProjectForm({ ...projectForm, name: e.target.value })} placeholder="Ex. Petcare API" />
          </InputArea>
          <Text>Language</Text>
          <InputArea borderColor="rgba(47,45,58,0.6)">
            <Input type="text" name="language" onChange={e => setProjectForm({ ...projectForm, language: e.target.value })} placeholder="Ex. Java" />
          </InputArea>
          <Text>Description</Text>
          <TextareaArea borderColor="rgba(47,45,58,0.6)">
            <TextareaInput value={project.description} onChange={e => setProjectForm({ ...projectForm, description: e.target.value })} placeholder="Description" />
          </TextareaArea>
          <Text>Project Url</Text>
          <InputArea borderColor="rgba(47,45,58,0.6)">
            <Input type="text" value={project.projectUrl} onChange={e => setProjectForm({ ...projectForm, projectUrl: e.target.value })} placeholder="Ex. https://rubenskj.com/" />
          </InputArea>
          <Text>Github Url</Text>
          <InputArea borderColor="rgba(47,45,58,0.6)">
            <Input type="text" value={project.githubUrl} onChange={e => setProjectForm({ ...projectForm, githubUrl: e.target.value })} placeholder="https://cursos.alura.com.br/degree/certificate/id-certificate" />
          </InputArea>
          <ButtonArea>
            <Button type="submit">Update</Button>
          </ButtonArea>
        </ContentForm>
      </Container>
    </ModalPrototype>
  );
}

export default ModalEditProject;