import React, { useRef, useState, useEffect, useMemo, RefObject } from 'react';

// Assets
import GitHubIcon from '../../../assets/GitHubIcon';
import ArrowLeft from '../../../assets/ArrowLeft';
import ArrowRight from '../../../assets/ArrowRight';

// Components
import ModalPrototype from '../ModalPrototype';

//Interfaces
import { Project } from '../../ProjectCard';

import {
  Container, SliderArea, ImageArea, Image, ChangeIcon, HeaderProject, Separator, Title, Description,
  CodeArea, WrapperCodeLine, CodeLine, Comentary, Word, Keyword, Variable,
  StringWithoutSpace, Footer, Redirect
} from './styles';

interface IModalProjectProps {
  project: Project;
  isOpen: boolean;
  setIsOpen: () => void;
}

const ModalProject: React.FC<IModalProjectProps> = ({ project, isOpen, setIsOpen }) => {
  const imageRef = useRef<HTMLImageElement>(null);
  const [activeImage, setActiveImage] = useState<number>(0);
  const [translate, setTranslate] = useState<number>(0);

  const title = useMemo(() => project.name !== undefined ? project.name.toUpperCase() : '', [project.name]);

  useEffect(() => {
    setActiveImage(0);
    setTranslate(0);
  }, [project]);

  function prevImage(activeImg: number, imageRef: RefObject<HTMLImageElement>) {
    let width = imageRef.current?.width;

    if (!width) {
      return;
    }

    if (activeImg <= 0) {
      return;
    }

    let incremented = activeImg - 1;

    setActiveImage(incremented);
    setTranslate(incremented * (width + 8));
  }

  function nextImage(activeImg: number, imageRef: RefObject<HTMLImageElement>) {
    let width = imageRef.current?.width;

    if (!width) {
      return;
    }

    let actual = activeImg;

    if (project.images && (actual + 1) >= project.images.length) {
      return;
    }

    let incremented = activeImg + 1;

    setActiveImage(incremented);
    setTranslate(incremented * (width + 8));
  }

  return (
    <ModalPrototype isOpen={isOpen} setIsOpen={setIsOpen} >
      <Container>
        {project.images && (
          <>
            <SliderArea>
              <ImageArea translateNumber={translate}>
                {project.images?.map((image, index) => (
                  <Image ref={imageRef} key={index} src={image} alt="Project Image" />
                ))}
              </ImageArea>
              {project.images.length > 0 && activeImage >= 1 && (
                  <ChangeIcon activeImage={activeImage} direction="left" onClick={() => prevImage(activeImage, imageRef)}>
                    <ArrowLeft size={28} />
                  </ChangeIcon>
              )}
              {project.images.length > (activeImage + 1) && (
                <ChangeIcon direction="right" onClick={() => nextImage(activeImage, imageRef)}>
                  <ArrowRight size={28} />
                </ChangeIcon>
              )}
            </SliderArea>
            <Separator />
          </>
        )}
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
        <Redirect target="_blank" href={project.githubUrl} >
          <GitHubIcon size={15} stroke="#5972A4" />
          <Comentary>Access on github</Comentary>
        </Redirect>
      </Footer>
    </ModalPrototype>
  );
}

export default ModalProject;