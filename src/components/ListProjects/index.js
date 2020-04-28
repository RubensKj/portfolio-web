import React from 'react';

// Components
import ProjectCard from '../ProjectCard';

// Styles
import { Container, List } from './styles';

export default function ListProjects() {
  return (
    <Container>
      <List>
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </List>
    </Container>
  );
}
