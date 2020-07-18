import React, { useRef, useCallback } from 'react';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

// Components
import ModalPrototype from '../ModalPrototype';

// Services
import api from '../../../services/api';
import { parseToCertification } from '../../../services/FormDataParser';

// Contexts
import { useToast } from '../../../hooks/toast';

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

  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: Project) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          name: Yup.string()
            .required('Project name is required.'),
          fullName: Yup.string()
            .required('Fullname is required.'),
          language: Yup.string()
            .required('Language is required.'),
          description: Yup.string()
            .required('Description is required.'),
          githubUrl: Yup.string()
            .matches(
              /^((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}/,
              'Github URL is invalid'
            )
            .required('Github URL is required.'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });
      } catch (error) {
        const errorMessages = {};

        if (error instanceof Yup.ValidationError) {

          error.inner.forEach(err => {
            errorMessages[err.path] = err.message;
          });

          return formRef.current?.setErrors(errorMessages);
        }
      }

      let certForm = parseToCertification(new Map(Object.entries(data)));

      api.put(`/project/${project.id}`, certForm).then(response => {
        setProject(response.data);

        setIsOpen();

        addToast({
          type: 'success',
          title: 'Project updated',
          description: 'Project have been updated sucessfully!!'
        });
      }).catch(error => {
        addToast({
          type: 'error',
          title: 'Error',
          description: error.message
        });
      });
    },
    [addToast, project.id, setIsOpen, setProject],
  );

  const handleDelete = useCallback(
    async () => {
      api.delete(`/project/${project.id}`).then(response => {
        deleteProject(project.id);

        setIsOpen();

        addToast({
          type: 'success',
          title: 'Project deleted',
          description: 'Project have been deleted sucessfully!!'
        });
      }).catch(error => {
        addToast({
          type: 'error',
          title: 'Error',
          description: error.message
        });
      });
    },
    [project.id, deleteProject, setIsOpen, addToast],
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