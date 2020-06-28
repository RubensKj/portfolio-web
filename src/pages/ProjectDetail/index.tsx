import React, { useEffect, useState } from 'react';

// Components
import { Project } from '../../components/ProjectCard';
import LoadingPage from '../../components/LoadingPage';

// Services
import api from '../../services/api';

// Styles
import { ColorHeader, Container, WrapperContent, Sidebar, ImageArea, Image } from './styles';

interface Props {
  match: {
    params: {
      id: string;
    }
  };
  history: {
    push(uri: string): void
  };
}

const ProjectDetail: React.FC<Props> = ({ match, history }) => {

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [project, setProject] = useState<Project>({} as Project);

  useEffect(() => {
    setIsLoading(true);
    async function loadProject(): Promise<void> {
      await api.get(`/repos/RubensKj/${match.params.id}`).then(response => {
        console.log(response.data)
        setProject(response.data);

        setIsLoading(false);
      }).catch(error => {
        history.push(`/projects/${match.params.id}/not-found`);
      });
    }

    loadProject();
  }, [history, match.params.id]);

  return (
    <>
      {isLoading ? <LoadingPage /> : (
        <>
          <ColorHeader />
          <Container>
            <WrapperContent>
              <Sidebar>
                {/* <p>Teste</p> */}
              </Sidebar>
              <ImageArea>
                <Image url="https://raw.githubusercontent.com/RubensKj/petcare-client/master/.github/main_page.gif" />
              </ImageArea>
            </WrapperContent>
          </Container>
        </>
      )}
    </>
  );
}

export default ProjectDetail;