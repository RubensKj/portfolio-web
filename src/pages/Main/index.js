import React, { useEffect, useState } from 'react';

// Services
import api from '../../services/api';

// Components
import HiThereArea from '../../components/HiThereArea';
import BarInBeginPage from '../../components/BarInBeginPage';
import PersonIntroduction from '../../components/PersonIntroduction';
import TransitionText from '../../components/TransitionText';
import ListProjects from '../../components/ListProjects';
import DeveloperStuffsArea from '../../components/DeveloperStuffsArea';
import FindMeHereArea from '../../components/FindMeHereArea';
import Footer from '../../components/Footer';

// Styles
import { Container, BeginPageArea } from './styles';

export default function Main() {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function getProjects() {
      await api.get('/users/RubensKj/repos')
        .then(data => setProjects(data.data))
        .catch(error => {
          console.log(error);
        });
    }
    getProjects();
  }, []);

  return (
    <Container>
      <BeginPageArea id="home">
        <HiThereArea />
        <BarInBeginPage width={72} color="#5a5e73" />
      </BeginPageArea>
      {/* <Anchor id="about_me" height={110} /> */}
      <TransitionText title="About me" description="This section shows a little about me and how I started to code" />
      <PersonIntroduction />
      <DeveloperStuffsArea />
      {/* <Anchor id="projects" height={105} /> */}
      <TransitionText marginTop={105} title="Some of my projects" description="Here are some of my projects, they are in GitHub. This are my favorite ones" />
      <ListProjects list={projects} />
      {/* <Anchor id="certifications" height={65} /> */}
      <TransitionText marginTop={65} title="Certifications" description="These are my certifications that I got until now, more are coming (And projects are too :))" />
      <p>Here comes the list of certifications</p>
      <FindMeHereArea />
      <Footer />
    </Container>
  );
}
