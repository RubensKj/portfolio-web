import React, { useRef, useCallback } from 'react';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

// Services
import api from '../../../services/api';
import { parseToCertification } from '../../../services/FormDataParser';

// Contexts
import { useToast } from '../../../hooks/toast';

// Components
import ModalPrototype from '../ModalPrototype';

import Input from '../../Input';
import InputFile from '../../InputFile';

import { Container } from './styles';
import {
  Title, ContentForm, Text, Buttons, Button
} from '../../../pages/EditPortfolio/styles';

// Interfaces
import { Certification } from '../../CertificationCard';
import TextArea from '../../TextArea';

interface IModalProps {
  certification: Certification;
  setCertification: (certification: Certification) => void;
  deleteCertification: (certificationId: Number) => void;
  isOpen: boolean;
  setIsOpen: () => void;
}

const ModalEditCertification: React.FC<IModalProps> = ({ certification, setCertification, deleteCertification, isOpen, setIsOpen }) => {
  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: Certification) => {
      try {
        const schema = Yup.object().shape({
          title: Yup.string()
            .required('Title is required.'),
          description: Yup.string()
            .required('Description is required.'),
          certificationUrl: Yup.string()
            .matches(
              /^((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}/,
              'Certification URL is invalid'
            )
            .required('Certification URL is required.'),
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

      api.put(`/certifications/${certification.id}`, certForm).then(response => {
        setCertification(response.data);

        setIsOpen();

        addToast({
          type: 'success',
          title: 'Certification updated',
          description: 'Certification have been updated sucessfully!!'
        });
      }).catch(error => {
        addToast({
          type: 'error',
          title: 'Error',
          description: error.message
        });
      });
    },
    [addToast, certification.id, setCertification, setIsOpen],
  );

  const handleDelete = useCallback(
    async () => {
      api.delete(`/certifications/${certification.id}`).then(response => {
        deleteCertification(certification.id);

        setIsOpen();

        addToast({
          type: 'success',
          title: 'Certification deleted',
          description: 'Certification have been deleted sucessfully!!'
        });
      }).catch(error => {
        addToast({
          type: 'error',
          title: 'Error',
          description: error.message
        });
      });
    },
    [addToast, certification.id, deleteCertification, setIsOpen],
  );

  return (
    <ModalPrototype isOpen={isOpen} setIsOpen={setIsOpen}>
      <Container>
        <Title>Editting Certification</Title>
        <ContentForm ref={formRef} onSubmit={handleSubmit} initialData={certification}>
          <Text>Certification Image</Text>
          <InputFile name="image" background="#2c2b35" borderColor="rgba(47,45,58,0.6)" accept="image/png, image/jpeg, image/gif, image/jpg" />
          <Text>Certification Name</Text>
          <Input type="text" name="title" placeholder="Ex. Java 13: Tire proveito dos novos recursos da linguagem.." borderColor="rgba(47,45,58,0.6)" />
          <Text>Description</Text>
          <TextArea name="description" placeholder="Description" borderColor="rgba(47,45,58,0.6)" />
          <Text>Certification Url</Text>
          <Input type="text" name="certificationUrl" placeholder="https://cursos.alura.com.br/degree/certificate/id-certificate" borderColor="rgba(47,45,58,0.6)" />
          <Buttons>
            <Button type="button" onClick={handleDelete} background="#d84945">Delete</Button>
            <Button type="submit">Add</Button>
          </Buttons>
        </ContentForm>
      </Container>
    </ModalPrototype>
  );
}

export default ModalEditCertification;