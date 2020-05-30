import React from 'react';

import TransitionText from '../../components/TransitionText';
import ListProjects from '../../components/ListProjects';

import { Container } from './styles';

const Projects: React.FC = () => {
  return (
    <Container>
      <TransitionText
        title="Here are all my projects"
        description="These are my projects that I made until now, more are coming!!"
        marginTop={0}
      />
      <ListProjects list={[]} />
    </Container>
  );
}

export default Projects;