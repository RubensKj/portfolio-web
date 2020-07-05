import React from 'react';

// Components
import Modal from '../Modal';

// Interfaces
import { Project } from '../ProjectCard';

import { Header, Dot, Container, Title, CodeLine, Keyword, Variable, String } from './styles';

interface IModalProps {
  project: Project;
  isOpen: boolean;
  setIsOpen: () => void;
};

const ModalProject: React.FC<IModalProps> = ({ project, isOpen, setIsOpen }) => {
  return (
    <Modal width='684px' isOpen={isOpen} setIsOpen={setIsOpen}>
      <Header>
        <Dot onClick={setIsOpen} color="#fc615d" hoverColor="#d04f4c" />
        <Dot color="#fdbc40" hoverColor="#ca9736" />
        <Dot color="#35c749" hoverColor="#2d9e3d" />
      </Header>
      <Container>
        <Title>"{project.name}"</Title>
        <CodeLine>
          <Keyword>const</Keyword>
          <Variable>title</Variable>
          <Keyword>=</Keyword>
          <String>"{project.name}"</String>
        </CodeLine>
      </Container>
    </Modal>
  );
}

export default ModalProject;