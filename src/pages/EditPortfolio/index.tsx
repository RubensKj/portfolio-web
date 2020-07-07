import React, { useState, useEffect } from 'react';

// Assets
import GitHubIcon from '../../assets/GitHubIcon';
import WebsiteIcon from '../../assets/WebsiteIcon';
import CertificationIcon from '../../assets/CertificationIcon';

// Services
import api from '../../services/api';

// Components
import Image from 'react-shimmer';
import TransitionText from '../../components/TransitionText';
import NotContentImage from '../../components/NotContentImage';
import BoxItems from '../../components/BoxItems';

// Interfaces
import { Project } from '../../components/ProjectCard';
import { Certification } from '../../components/CertificationCard';

import {
  Container, Redirection, Redirect, BarSection, Bar,
  ImageArea, Description, ContentForm, Text, Strong, InputArea,
  Input, Label, ButtonArea, Button, TextareaArea, TextareaInput,
  WrapperContent, Title, CardReposArea, CardAddRepo, Header,
  ContainerCard, Footer, EditProjectCard, Bottom
} from './styles';

const EditPortfolio: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [certifications, setCertifications] = useState<Certification[]>([]);

  useEffect(() => {
    async function getProjects() {
      const response = await api.get('projects');

      setProjects(response.data);
    }

    async function getCertifications() {
      const response = await api.get('certifications');

      setCertifications(response.data);
    }

    getProjects();
    getCertifications();
  }, []);

  return (
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
      <ContentForm>
        <ImageArea>
          <Image
            src="https://instagram.ffln2-2.fna.fbcdn.net/v/t51.2885-15/e35/47489450_965388186987389_6000681300519320808_n.jpg?_nc_ht=instagram.ffln2-2.fna.fbcdn.net&_nc_cat=105&_nc_ohc=6ktPeqaYP80AX-JQiOu&oh=90d9b037931accd3bc023cd6a73dc1fd&oe=5F106690"
            fallback={
              <Description />
            }
            errorFallback={() => <NotContentImage background="#fafbff" />}
          />
        </ImageArea>
        <Label>label_to_arquivo_selected.png</Label>
        <Text>Displayed name</Text>
        <InputArea>
          <Input type="text" placeholder="Ex. Rubens Kleinschmidt Jr" />
        </InputArea>
        <Text>Description</Text>
        <TextareaArea>
          <TextareaInput placeholder="Description" />
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
          <form style={{ width: '100%' }}>
            <ContainerCard>
              <Text>Enter the <Strong>URL of a Git repository</Strong> to add it:</Text>
              <InputArea>
                <Input type="text" placeholder="https://my-provider.com/my-organization/my-project" />
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
          <EditProjectCard>
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
          <EditProjectCard>
            <Title>{certification.title}</Title>
            <Description>{certification.description}</Description>
          </EditProjectCard>
        ))}
      </BoxItems>
      <Bottom />
    </Container>
  );
}

export default EditPortfolio;