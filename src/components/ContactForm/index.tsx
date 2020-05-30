import React from 'react';

// Components
import TitleTextPrompt from '../TitleTextPrompt';
import InputPrompt from '../InputPrompt';
import TextAreaPrompt from '../TextAreaPrompt';
import ButtonPrompt from '../ButtonPrompt';

// Styles
import { Container, ContactArea, ContactFormArea } from './styles';

import { ConsoleText } from '../CommandPrompt/styles';

const ContactForm: React.FC = () => {
  return (
    <Container>
      <ConsoleText>CREATING CONTACT FORM..</ConsoleText>
      <ConsoleText>CONTACT FORM CREATED.</ConsoleText>
      <ContactArea>
        <TitleTextPrompt text="CONTACT" />
        <ContactFormArea>
          <ConsoleText>Complete Name</ConsoleText>
          <InputPrompt type="text" maxWidth={320} />
          <ConsoleText>Email</ConsoleText>
          <InputPrompt type="text" maxWidth={320} />
          <ConsoleText>Description</ConsoleText>
          <TextAreaPrompt maxWidth={320} />
          <ConsoleText>Attachment</ConsoleText>
          <InputPrompt type="file" maxWidth={320} />
          <ButtonPrompt text="Send me" marginTop={35} />
        </ContactFormArea>
      </ContactArea>
    </Container>
  );
}

export default ContactForm;