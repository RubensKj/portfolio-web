import React, { useCallback, useRef } from 'react';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

// Services
import api from '../../services/api';
import { parseToCertification } from '../../services/FormDataParser';

// Contexts
import { useToast } from '../../hooks/toast';

// Components
import TitleTextPrompt from '../TitleTextPrompt';
import InputPrompt from '../InputPrompt';
import InputFilePrompt from '../InputFilePrompt';
import TextAreaPrompt from '../TextAreaPrompt';
import ButtonPrompt from '../ButtonPrompt';

// Styles
import { Container, ContactArea, ContactFormArea } from './styles';

import { ConsoleText } from '../CommandPrompt/styles';

interface Contact {
  completeName: string;
  email: string;
  description: string;
  files: string | Blob;
}

const ContactForm: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const { addToast } = useToast();

  const handleSubmit = useCallback(
    async (data: Contact) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          completeName: Yup.string()
            .min(3, 'Complete name should have at least 3 characters')
            .matches(/^[A-Za-z]+([A-Za-z]+)*/, 'Complete name is invalid')
            .required('Complete Name is required.'),
          email: Yup.string()
            .email('E-mail is invalid')
            .required('E-mail  is required.'),
          description: Yup.string()
            .min(15, 'Description should have at least 15 characters')
            .required('Description is required.'),
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

      api.post('/contact/send', certForm).then(response => {

        formRef.current?.reset();

        addToast({
          type: 'success',
          title: 'Contact sended',
          description: 'Wow! thanks for contact me!!'
        });
      }).catch(error => {
        if (error.response && error.response.data && error.response.data.message) {
          return addToast({
            type: 'error',
            title: 'Error',
            description: error.response.data.message
          });
        }

        addToast({
          type: 'error',
          title: 'Error',
          description: error.message
        });
      });
    },
    [addToast],
  );

  return (
    <Container>
      <ConsoleText>CREATING CONTACT FORM..</ConsoleText>
      <ConsoleText>CONTACT FORM CREATED.</ConsoleText>
      <ContactArea>
        <TitleTextPrompt text="CONTACT" />
        <ContactFormArea ref={formRef} onSubmit={handleSubmit}>
          <ConsoleText>Complete Name</ConsoleText>
          <InputPrompt type="text" name="completeName" maxWidth={320} />
          <ConsoleText>Email</ConsoleText>
          <InputPrompt type="text" name="email" maxWidth={320} />
          <ConsoleText>Description</ConsoleText>
          <TextAreaPrompt name="description" maxWidth={320} />
          <div style={{ marginTop: '8px' }} />
          <ConsoleText>Attachment</ConsoleText>
          <InputFilePrompt type="file" name="files" maxWidth={320} multiple accept="image/png, image/jpeg, image/gif, image/jpg, application/pdf, application/vnd.ms-excel" />
          <ButtonPrompt text="Send me" marginTop={35} />
        </ContactFormArea>
      </ContactArea>
    </Container>
  );
}

export default ContactForm;