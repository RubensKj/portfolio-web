import React, { useEffect, useState } from 'react';

// Components
import { Project } from '../../components/ProjectCard';
import LoadingPage from '../../components/LoadingPage';

// Services
import api from '../../services/api';

// Styles
import { Container } from './styles';

interface Props {
  match: {
    params: {
      id: string;
    }
  };
}

const ProjectDetail: React.FC<Props> = ({ match }) => {

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [project, setProject] = useState<Project>({} as Project);

  useEffect(() => {
    setIsLoading(true);
    async function loadProject(): Promise<void> {
      const response = await api.get(`/repos/RubensKj/${match.params.id}`);

      setProject(response.data);

      setIsLoading(false);
    }

    loadProject();
  }, [match.params.id]);

  return (
    <>
      {isLoading ? <LoadingPage /> : (
        <Container>
          {project.id}
        </Container>
      )}
    </>
  );
}

export default ProjectDetail;