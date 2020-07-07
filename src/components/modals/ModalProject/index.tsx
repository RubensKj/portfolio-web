import React, { useMemo } from 'react';

// Assets
import GitHubIcon from '../../../assets/GitHubIcon';

// Components
import ModalPrototype from '../ModalPrototype';

//Interfaces
import { Project } from '../../ProjectCard';

import {
  Container, ImageArea, Image, HeaderProject, Separator, Title, Description,
  CodeArea, WrapperCodeLine, CodeLine, Comentary, Word, Keyword, Variable,
  StringWithoutSpace, Footer, Redirect
} from './styles';

interface IModalProjectProps {
  project: Project;
  isOpen: boolean;
  setIsOpen: () => void;
}

const ModalProject: React.FC<IModalProjectProps> = ({ project, isOpen, setIsOpen }) => {

  const title = useMemo(() => project.name !== undefined ? project.name.toUpperCase() : '', [project.name]);

  return (
    <ModalPrototype isOpen={isOpen} setIsOpen={setIsOpen} >
      <Container>
        <ImageArea>
          <Image src="https://raw.githubusercontent.com/RubensKj/petcare-client/master/.github/main_page.gif" alt="Project Image" />
        </ImageArea>
        <Separator />
        <HeaderProject>
          <Title>"{title}"</Title>
          {project.description && (
            <Description>{project.description}</Description>
          )}
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
      <Footer>
        <Separator />
        <Redirect target="_blank" href={project.html_url} >
          <GitHubIcon size={15} stroke="#5972A4" />
          <Comentary>Access on github</Comentary>
        </Redirect>
      </Footer>
    </ModalPrototype>
  );
}

export default ModalProject;