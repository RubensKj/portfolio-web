import React, { useRef, useState, useEffect, useCallback } from 'react';
import { FormHandles } from '@unform/core';

// Assets
import GitHubIcon from '../../assets/GitHubIcon';
import WebsiteIcon from '../../assets/WebsiteIcon';
import CertificationIcon from '../../assets/CertificationIcon';

// Services
import { DEFAULT_ID } from '../../services/env';
import api from '../../services/api';
import { parseToCertification } from '../../services/FormDataParser';

// Contexts
import { useLoading } from '../../contexts/loading';
import { useToast } from '../../hooks/toast';

// Components
import LoadingPage from '../../components/LoadingPage';
import TransitionText from '../../components/TransitionText';
import BoxItems from '../../components/BoxItems';
import TextArea from '../../components/TextArea';

// Modals
import ModalEditProject from '../../components/modals/ModalEditProject';
import ModalEditCertification from '../../components/modals/ModalEditCertification';

// Interfaces
import { Person } from '../../components/PersonIntroduction';
import { Project } from '../../components/ProjectCard';
import { Certification } from '../../components/CertificationCard';

import Input from '../../components/Input';
import InputFile from '../../components/InputFile';

import {
  Container, Redirection, Redirect, BarSection, Bar,
  Description, ContentForm, Text, Strong, ButtonArea,
  Button, WrapperContent, Title, CardReposArea, CardAddRepo,
  Header, ContainerCard, Footer, EditProjectCard, Bottom, Error
} from './styles';

interface Provider {
  url: string;
  nameProvider: string;
  user: string;
  repoName: string;
}

const EditPortfolio: React.FC = () => {
  const fromProviderRef = useRef<FormHandles>(null);
  const formCertRef = useRef<FormHandles>(null);

  const { isLoading, setIsLoading } = useLoading();
  const { addToast } = useToast();

  // Error
  const [error, setError] = useState<string>('');

  // Person
  const [person, setPerson] = useState<Person>({} as Person);

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
    async function getInformation(): Promise<void> {
      const response = await api.get(`/information/${DEFAULT_ID}`);

      setPerson(response.data.personDTO);
      setProjects(response.data.projectsDTO);
      setCertifications(response.data.certifications);
      setIsLoading(false);
    }

    getInformation();
  }, [setIsLoading]);

  function toggleProjectModal(project: Project): void {
    setIsOpenProjectModal(!isOpenProjectModal);
    setProjectSelected(project);
  }

  function toggleCertificationModal(certification: Certification): void {
    setIsOpenCertificationModal(!isOpenCertificationModal);
    setCertificationSelected(certification);
  }

  function updateProjectDataAfterRequest(data: Project) {
    setProjects([data, ...projects.filter(project => project.id !== data.id)])
  }

  function deleteProjectDataAfterRequest(projectId: Number) {
    setProjects([...projects.filter(project => project.id !== projectId)])
  }

  function updateCertificationDataAfterRequest(data: Certification) {
    setCertifications([data, ...certifications.filter(certification => certification.id !== data.id)])
  }

  function deleteCertificationDataAfterRequest(certificationId: Number) {
    setCertifications([...certifications.filter(certification => certification.id !== certificationId)])
  }

  const handleSubmitPerson = useCallback(
    async (data: Person) => {
      let certForm = parseToCertification(new Map(Object.entries(data)));

      api.put(`/person/${DEFAULT_ID}`, certForm).then(response => {
        setPerson(response.data);

        addToast({
          type: 'success',
          title: 'Person updated',
          description: 'Person have been updated sucessfully!!'
        });
      }).catch(error => {
        addToast({
          type: 'error',
          title: 'Error',
          description: error.message
        });
      });
    },
    [addToast],
  );

  const submitProjectByProvider = useCallback(
    async (data: Provider) => {
      if (!data.url) {
        return setError('Url must be provided');
      }

      if (!data.url.includes('/')) {
        return;
      }

      let url = new URL(data.url);

      let params = url.pathname.split('/');

      let dataToAPI = {
        nameProvider: url.hostname.replace('.com', '').toUpperCase(),
        user: params[1],
        repoName: params[2]
      }

      api.post(`/project/provider/${DEFAULT_ID}`, dataToAPI).then(response => {
        let project: Project = response.data;

        setProjects([...projects, project]);

        fromProviderRef.current?.reset();

        addToast({
          type: 'success',
          title: 'Project created',
          description: 'Project have been created sucessfully!!'
        });
      }).catch(error => {
        addToast({
          type: 'error',
          title: 'Error',
          description: error.message
        });
      });
    },
    [addToast, projects],
  );

  const handleSubmitCertification = useCallback(
    async (data: Certification) => {
      let certForm = parseToCertification(new Map(Object.entries(data)));

      api.post(`/certifications/${DEFAULT_ID}`, certForm).then(response => {
        setCertifications([...certifications, response.data]);

        formCertRef.current?.reset();

        addToast({
          type: 'success',
          title: 'Certification created',
          description: 'Certification created sucessfully!!'
        });
      }).catch(error => {
        addToast({
          type: 'error',
          title: 'Error',
          description: error.message
        });
      });
    },
    [addToast, certifications],
  );

  return (
    <>
      <ModalEditProject
        project={projectSelected}
        setProject={updateProjectDataAfterRequest}
        deleteProject={deleteProjectDataAfterRequest}
        isOpen={isOpenProjectModal}
        setIsOpen={() => toggleProjectModal(projectSelected)}
      />

      <ModalEditCertification
        certification={certificationSelected}
        setCertification={updateCertificationDataAfterRequest}
        deleteCertification={deleteCertificationDataAfterRequest}
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
          <ContentForm onSubmit={handleSubmitPerson} initialData={person}>
            <InputFile id="file-image-input" type="file" name="avatar" accept="image/png, image/jpeg, image/gif, image/jpg" />
            <Text>Displayed name</Text>
            <Input type="text" name="displayedName" placeholder="Ex. Rubens Kleinschmidt Jr" />
            <Text>Description</Text>
            <TextArea name="description" placeholder="Description" />
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
              <ContentForm ref={fromProviderRef} onSubmit={submitProjectByProvider} padding="0" paddingbottom="0">
                <ContainerCard>
                  <Text>Enter the <Strong>URL of a Git repository</Strong> to add it:</Text>
                  {error && (
                    <Error>{error}</Error>
                  )}
                  <Input type="text" name="url" onChange={e => setProvider({ ...provider, url: e.target.value })} placeholder="https://my-provider.com/my-organization/my-project" />
                </ContainerCard>
                <Footer>
                  <ButtonArea>
                    <Button>Continue</Button>
                  </ButtonArea>
                </Footer>
              </ContentForm>
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
          <ContentForm ref={formCertRef} onSubmit={handleSubmitCertification} encType="multipart/form-data">
            <Text>Certificate File Image</Text>
            <InputFile name="imageFile" accept="image/png, image/jpeg, image/gif, image/jpg" />
            <Text>Certification Name</Text>
            <Input type="text" name="title" placeholder="Ex. Java 13: Tire proveito dos novos recursos da linguagem.." />
            <Text>Description</Text>
            <TextArea name="description" placeholder="Description" />
            <Text>Certification Url</Text>
            <Input type="text" name="certificationUrl" placeholder="https://cursos.alura.com.br/degree/certificate/id-certificate" />
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