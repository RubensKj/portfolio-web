import React, { useMemo, useState } from 'react';

// Assets
import GitHubIcon from '../../assets/GitHubIcon';

// Components
import Modal from '../Modal';

// Interfaces
import { Project } from '../ProjectCard';

import {
  Header, Dot, Container, ImageArea, Image, HeaderProject, Separator, Title, Description,
  CodeArea, WrapperCodeLine, CodeLine, Comentary, Word, Keyword, Variable,
  StringWithoutSpace, Redirect
} from './styles';

interface IModalProps {
  project: Project;
  isOpen: boolean;
  setIsOpen: () => void;
};

const ModalProject: React.FC<IModalProps> = ({ project, isOpen, setIsOpen }) => {

  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const title = useMemo(() => project.name !== undefined ? project.name.toUpperCase() : '', [project.name]);

  function toggleFullscreen() {
    setIsFullscreen(!isFullscreen);
  }

  return (
    <Modal width={!isFullscreen ? '684px' : '1280px'} height='725px' isOpen={isOpen} setIsOpen={setIsOpen}>
      <Header>
        <Dot onClick={setIsOpen} color="#fc615d" hoverColor="#d04f4c" />
        <Dot onClick={toggleFullscreen} color="#fdbc40" hoverColor="#ca9736" />
        <Dot color="#35c749" hoverColor="#2d9e3d" />
      </Header>
      <Container>
        <ImageArea>
          <Image src="https://raw.githubusercontent.com/RubensKj/petcare-client/master/.github/main_page.gif" alt="Project Image" />
        </ImageArea>
        <Separator />
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
        <Separator />
        <Redirect target="_blank" href={project.html_url} >
          <GitHubIcon size={15} stroke="#5972A4" />
          <Comentary>Access on github</Comentary>
        </Redirect>
      </Container>
    </Modal>
  );
}

export default ModalProject;