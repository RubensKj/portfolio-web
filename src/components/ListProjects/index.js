import React from 'react';

// Components
import ProjectCard from '../ProjectCard';

// Styles
import { Container, List } from './styles';

export default function ListProjects({ list }) {
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
