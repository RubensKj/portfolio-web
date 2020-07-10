import React, { useState, useEffect } from 'react';

// Env
import { DEFAULT_ID } from '../../services/env';

// Services
import api from '../../services/api';

// Components
import LoadingPage from '../../components/LoadingPage';
import TransitionText from '../../components/TransitionText';
import ListProjects from '../../components/ListProjects';

// Interfaces
import { Project } from '../../components/ProjectCard';

import { Container } from './styles';

const Projects: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    setIsLoading(true);
    async function getProjects(): Promise<void> {
      await api.get(`/project/${DEFAULT_ID}`)
        .then(data => {
          setProjects(data.data)
          setIsLoading(false);
        })
        .catch(error => {
          console.log(error);
        });
    }

    getProjects();
  }, []);

  return (
    <>
      {isLoading ? <LoadingPage /> : (
        <Container>
          <TransitionText
            title="Here are all my projects"
            description="These are my projects that I made until now, more are coming!!"
            marginTop={0}
          />
          <ListProjects list={projects} />
        </Container>
      )}
    </>
  );
}

export default Projects;