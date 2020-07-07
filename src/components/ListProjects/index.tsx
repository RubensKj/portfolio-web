import React, { useState } from 'react';

// Components
import ModalProject from '../modals/ModalProject';
import ProjectCard from '../ProjectCard';

// Styles
import { Container, List } from './styles';

import { Project } from '../ProjectCard';

interface Props {
  list: Project[];
}

const ListProjects: React.FC<Props> = ({ list }) => {
  const [projectSelected, setProjectSelected] = useState<Project>({} as Project);

  const [modalProject, setModalProject] = useState<boolean>(false);

  function toggleOpenModalProject(project: Project): void {
    setModalProject(!modalProject);
    setProjectSelected(project);

    console.log(JSON.stringify(list))
  }

  return (
    <>
      <ModalProject
        project={projectSelected}
        isOpen={modalProject}
        setIsOpen={() => toggleOpenModalProject(projectSelected)}
      />

      <Container>
        <List>
          {list.map(project => (
            <ProjectCard key={project.id} info={project} onClickOpenModal={toggleOpenModalProject} />
          ))}
        </List>
      </Container>
    </>
  );
}

export default ListProjects;
