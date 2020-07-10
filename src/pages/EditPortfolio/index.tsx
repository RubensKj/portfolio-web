import React, { useState, useEffect, ChangeEvent, FormEvent } from 'react';

// Assets
import GitHubIcon from '../../assets/GitHubIcon';
import WebsiteIcon from '../../assets/WebsiteIcon';
import CertificationIcon from '../../assets/CertificationIcon';

// Services
import { DEFAULT_ID } from '../../services/env';
import api from '../../services/api';

// Components
import LoadingPage from '../../components/LoadingPage';
import Image from 'react-shimmer';
import TransitionText from '../../components/TransitionText';
import NotContentImage from '../../components/NotContentImage';
import BoxItems from '../../components/BoxItems';

// Modals
import ModalEditProject from '../../components/modals/ModalEditProject';
import ModalEditCertification from '../../components/modals/ModalEditCertification';

// Interfaces
import { Person } from '../../components/PersonIntroduction';
import { Project } from '../../components/ProjectCard';
import { Certification } from '../../components/CertificationCard';

import {
  Container, Redirection, Redirect, BarSection, Bar,
  ImageArea, Description, ContentForm, Text, Strong, InputArea,
  Input, Label, ButtonArea, Button, TextareaArea, TextareaInput,
  WrapperContent, Title, CardReposArea, CardAddRepo, Header,
  ContainerCard, Footer, EditProjectCard, Bottom, Error
} from './styles';

interface Provider {
  url: string;
  nameProvider: string;
  user: string;
  repoName: string;
}

const EditPortfolio: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Error
  const [error, setError] = useState<string>('');

  // Person
  const [person, setPerson] = useState<Person>({} as Person);
  const [textImage, setTextImage] = useState<string>('Any file has been selected');

  // Project Provider
  const [provider, setProvider] = useState<Provider>({} as Provider);

  // Projects List
  const [projects, setProjects] = useState<Project[]>([]);
  const [certifications, setCertifications] = useState<Certification[]>([]);

  // Project Edit
  const [projectSelected, setProjectSelected] = useState<Project>({} as Project);
  const [isOpenProjectModal, setIsOpenProjectModal] = useState<boolean>(false);

  // Certification
  const [certificationSelected, setCertificationSelected] = useState<Certification>({} as Certification);
  const [isOpenCertificationModal, setIsOpenCertificationModal] = useState<boolean>(false);

  useEffect(() => {
    setIsLoading(true);
    async function getInformation(): Promise<void> {
      const response = await api.get(`/information/${DEFAULT_ID}`);

      setPerson(response.data.personDTO);
      setProjects(response.data.projectsDTO);
      setCertifications(response.data.certifications);
      setIsLoading(false);
    }

    getInformation();
  }, []);

  function toggleProjectModal(project: Project): void {
    setIsOpenProjectModal(!isOpenProjectModal);
    setProjectSelected(project);
  }

  function toggleCertificationModal(certification: Certification): void {
    setIsOpenCertificationModal(!isOpenCertificationModal);
    setCertificationSelected(certification);
  }

  function handleSubmitPerson(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    let data = new FormData();
    data.append('displayedName', person.displayedName ? person.displayedName : '');
    data.append('description', person.description ? person.description : '');

    if (person.file) {
      data.append('avatarFile', person.file);
    }

    api.put(`/person/${DEFAULT_ID}`, data).then(response => {
      setPerson(response.data);
    }).catch(error => {
      console.log(error);
    });
  }

  function handleImage(event: ChangeEvent<HTMLInputElement>): void {
    event.preventDefault();

    let file: File | null | undefined = event.target.files?.item(0);

    if (!file) {
      return;
    }

    setPerson({ ...person, file: file });
    setTextImage(file.name);
  }

  function submitProjectByProvider(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!provider.url) {
      return setError('Url must be provided');
    }

    if (!provider.url.includes('/')) {
      return;
    }

    let url = new URL(provider.url);

    let params = url.pathname.split('/');

    let data = {
      nameProvider: url.hostname.replace('.com', '').toUpperCase(),
      user: params[1],
      repoName: params[2]
    }

    api.post(`/project/provider/${DEFAULT_ID}`, data).then(response => {
      let project: Project = response.data;

      setProjects([...projects, project]);
    }).catch(error => {
      console.log(error);
    });
  }

  return (
    <>
      <ModalEditProject
        project={projectSelected}
        setProject={setProjectSelected}
        isOpen={isOpenProjectModal}
        setIsOpen={() => toggleProjectModal(projectSelected)}
      />

      <ModalEditCertification
        certification={certificationSelected}
        isOpen={isOpenCertificationModal}
        setIsOpen={() => toggleCertificationModal(certificationSelected)}
      />

      {isLoading ? <LoadingPage /> : (
        <Container>
          <TransitionText title="Editting Portfolio" description="Here you can change all the things that is shown to user on the main page and the secondary pages." marginTop={0} paddingTop={115} />
          <Redirection>
            <Redirect href="#person">
              <Text>Person</Text>
            </Redirect>
            <Redirect href="#git-import">
              <Text>Git Imports</Text>
            </Redirect>
            <Redirect href="#project-edit">
              <Text>Edit Projects</Text>
            </Redirect>
            <Redirect href="#adding-certs">
              <Text>Add Certification</Text>
            </Redirect>
            <Redirect href="#editting-certs">
              <Text>Edit Certification</Text>
            </Redirect>
          </Redirection>
          <BarSection id="person">
            <Bar />
          </BarSection>
          <WrapperContent>
            <Title>Person Infomartion</Title>
            <Description>In case you want to change the main things that is shown to user.</Description>
          </WrapperContent>
          <ContentForm onSubmit={(event: FormEvent<HTMLFormElement>) => handleSubmitPerson(event)}>
            <label htmlFor="file-image-input">
              {person.avatar ? (
                <ImageArea>
                  <Image
                    src={person.avatar}
                    fallback={
                      <Description />
                    }
                    errorFallback={() => <NotContentImage background="#fafbff" />}
                  />
                </ImageArea>
              ) : (<NotContentImage background="#fafbff" />)}
            </label>
            <input id="file-image-input" type="file" style={{ display: 'none' }} onChange={handleImage} />
            <Label>{textImage}</Label>
            <Text>Displayed name</Text>
            <InputArea>
              <Input type="text" defaultValue={person.displayedName ? person.displayedName : ''} onChange={e => setPerson({ ...person, displayedName: e.target.value })} placeholder="Ex. Rubens Kleinschmidt Jr" />
            </InputArea>
            <Text>Description</Text>
            <TextareaArea>
              <TextareaInput defaultValue={person.description} onChange={e => setPerson({ ...person, description: e.target.value })} placeholder="Description" />
            </TextareaArea>
            <ButtonArea>
              <Button>Save</Button>
            </ButtonArea>
          </ContentForm>
          <BarSection id="git-import">
            <Bar />
          </BarSection>
          <WrapperContent>
            <Title>Adding repositories</Title>
            <Description>Here you can add the repositories from Github</Description>
          </WrapperContent>
          <CardReposArea>
            <CardAddRepo>
              <Header>
                <Title>Import a Git Repository</Title>
                <GitHubIcon size={32} />
              </Header>
              <form style={{ width: '100%' }} onSubmit={submitProjectByProvider}>
                <ContainerCard>
                  <Text>Enter the <Strong>URL of a Git repository</Strong> to add it:</Text>
                  {error && (
                    <Error>{error}</Error>
                  )}
                  <InputArea>
                    <Input type="text" onChange={e => setProvider({ ...provider, url: e.target.value })} placeholder="https://my-provider.com/my-organization/my-project" />
                  </InputArea>
                </ContainerCard>
                <Footer>
                  <ButtonArea>
                    <Button>Continue</Button>
                  </ButtonArea>
                </Footer>
              </form>
            </CardAddRepo>
          </CardReposArea>
          <WrapperContent id="project-edit">
            <Title>Editting projects</Title>
            <Description>In case you need to change some fields of projects and etc..</Description>
          </WrapperContent>
          <BoxItems title="Edit a Project" icon={<WebsiteIcon size={32} color="#8492a6" />}>
            {projects.map(project => (
              <EditProjectCard key={project.id} onClick={() => toggleProjectModal(project)}>
                <Title>{project.name}</Title>
                <Description>{project.description}</Description>
              </EditProjectCard>
            ))}
          </BoxItems>
          <BarSection id="adding-certs">
            <Bar />
          </BarSection>
          <WrapperContent>
            <Title>Adding certifications</Title>
            <Description>In case you want to add more certification to your list..</Description>
          </WrapperContent>
          <ContentForm>
            <Text>Certificate File Image</Text>
            <InputArea>
              <Input type="file" />
            </InputArea>
            <Text>Certification Name</Text>
            <InputArea>
              <Input type="text" placeholder="Ex. Java 13: Tire proveito dos novos recursos da linguagem.." />
            </InputArea>
            <Text>Description</Text>
            <TextareaArea>
              <TextareaInput placeholder="Description" />
            </TextareaArea>
            <Text>Certification Url</Text>
            <InputArea>
              <Input type="text" placeholder="https://cursos.alura.com.br/degree/certificate/id-certificate" />
            </InputArea>
            <ButtonArea>
              <Button>Add</Button>
            </ButtonArea>
          </ContentForm>
          <WrapperContent id="editting-certs">
            <Title>Editting certifications</Title>
            <Description>In case you need to change some fields of certifications and etc..</Description>
          </WrapperContent>
          <BoxItems title="Edit a certificate" icon={<CertificationIcon size={32} fill="#8492a6" />}>
            {certifications.map(certification => (
              <EditProjectCard key={certification.id} onClick={() => toggleCertificationModal(certification)}>
                <Title>{certification.title}</Title>
                <Description>{certification.description}</Description>
              </EditProjectCard>
            ))}
          </BoxItems>
          <Bottom />
        </Container>
      )}
    </>
  );
}

export default EditPortfolio;