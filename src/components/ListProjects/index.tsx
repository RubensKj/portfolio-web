import React from 'react';

// Components
import ProjectCard from '../ProjectCard';

// Styles
import { Container, List } from './styles';

import { Project } from '../ProjectCard';

interface Props {
  list: Project[];
}

const ListProjects: React.FC<Props> = ({ list }) => {
  return (
    <Container>
      <List>
        {list.map(project => (
          <ProjectCard key={project.id} info={project} />
        ))}
      </List>
    </Container>
  );
}

export default ListProjects;
