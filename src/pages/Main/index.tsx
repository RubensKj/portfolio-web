import React, { useEffect, useState } from 'react';

// Services
import apiGithub from '../../services/apiGithub';
import api from '../../services/api';

// Components
import HiThereArea from '../../components/HiThereArea';
import BarInBeginPage from '../../components/BarInBeginPage';
import PersonIntroduction, { Person } from '../../components/PersonIntroduction';
import TransitionText from '../../components/TransitionText';
import DeveloperStuffsArea from '../../components/DeveloperStuffsArea';
import ListProjects from '../../components/ListProjects';
import ListCertifications from '../../components/ListCertifications';
import CommandPrompt from '../../components/CommandPrompt';
import ContactForm from '../../components/ContactForm';
import Footer from '../../components/Footer';

// Loading
import LoadingPage from '../../components/LoadingPage';

// Interface
import { Project } from '../../components/ProjectCard';
import { Certification } from '../../components/CertificationCard';

// Styles
import { Container, BeginPageArea } from './styles';

const Main: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [person, setPerson] = useState<Person>({} as Person);
  const [projects, setProjects] = useState<Project[]>([]);

  const [certifications, setCertifications] = useState<Certification[]>([]);

  useEffect(() => {
    setIsLoading(true);
    async function getPerson(): Promise<void> {
      const response = await api.get('person');

      setPerson(response.data);
      setIsLoading(false);
    }

    async function getProjects(): Promise<void> {
      const response = await apiGithub.get('/users/RubensKj/repos');
      setProjects(response.data)
    }
    async function getCertifications(): Promise<void> {
      const response = await api.get('certifications');

      setCertifications(response.data);
    }

    getProjects();
    getCertifications();
    getPerson();
  }, []);

  return (
    <>
      {isLoading ? <LoadingPage /> : (
        <Container>
          <BeginPageArea id="home">
            <HiThereArea displayedName={person.displayedName ? person.displayedName : 'Rubens Kleinschmidt Jr'} />
            <BarInBeginPage width={72} color="#5a5e73" />
          </BeginPageArea>
          <TransitionText title="About me" description="This section shows a little about me and how I started to code" />
          <PersonIntroduction person={person} />
          <DeveloperStuffsArea />
          <TransitionText marginTop={105} title="Some of my projects" description="Here are some of my projects, they are in GitHub. These are my favorite ones" />
          <ListProjects list={projects} />
          <TransitionText marginTop={65} title="Certifications" description="These are my certifications that I got until now, more are coming (And projects are too :))" />
          <ListCertifications list={certifications} />
          <TransitionText marginTop={65} title="Contact me" description="Hey contact me if you liked my work. Just fill the form below and send me, I am waiting for you :)" />
          <CommandPrompt command='npm create contact-form' marginBottom={50}>
            <ContactForm />
          </CommandPrompt>
          <Footer />
        </Container>
      )}
    </>
  );
}

export default Main;