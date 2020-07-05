import React, { useMemo } from 'react';

// Components
import Modal from '../Modal';

// Interfaces
import { Project } from '../ProjectCard';

import {
  Header, Dot, Container, HeaderProject, Separator, Title, Description,
  CodeArea, WrapperCodeLine, CodeLine, Comentary, Word, Keyword, Variable, StringWithoutSpace
} from './styles';

interface IModalProps {
  project: Project;
  isOpen: boolean;
  setIsOpen: () => void;
};

const ModalProject: React.FC<IModalProps> = ({ project, isOpen, setIsOpen }) => {

  const title = useMemo(() => project.name !== undefined ? project.name.toUpperCase() : '', [project.name]);

  return (
    <Modal width='684px' isOpen={isOpen} setIsOpen={setIsOpen}>
      <Header>
        <Dot onClick={setIsOpen} color="#fc615d" hoverColor="#d04f4c" />
        <Dot color="#fdbc40" hoverColor="#ca9736" />
        <Dot color="#35c749" hoverColor="#2d9e3d" />
      </Header>
      <Container>
        <HeaderProject>
          <Title>"{title}"</Title>
          <Description>{project.description}</Description>
        </HeaderProject>
        <Separator />
        <CodeArea>
          <Comentary>// Project Specification</Comentary>
          <WrapperCodeLine>
            <CodeLine>
              <Keyword>const</Keyword>
              <Variable>primaryLanguage</Variable>
              <Keyword>=</Keyword>
              <StringWithoutSpace>"{project.language}"</StringWithoutSpace>
              <Word>;</Word>
            </CodeLine>
            {project.license && (
              <CodeLine>
                <Keyword>const</Keyword>
                <Variable>license</Variable>
                <Keyword>=</Keyword>
                <StringWithoutSpace>"{project.license?.name}"</StringWithoutSpace>
                <Word>;</Word>
              </CodeLine>
            )}
          </WrapperCodeLine>
        </CodeArea>
      </Container>
    </Modal>
  );
}

export default ModalProject;