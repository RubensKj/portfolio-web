import React from 'react';

// Components
import CommandPrompt from '../../components/CommandPrompt';
import TitleTextPrompt from '../../components/TitleTextPrompt';
import HRefButtonPrompt from '../../components/HRefButtonPrompt';

// Styles
import { Container, NotFoundArea, Strong, JSONArea } from './styles';

import { ConsoleText } from '../../components/CommandPrompt/styles';

interface Props {
  location: {
    pathname: string;
  }
}

const NotFound: React.FC<Props> = ({ location }) => {

  const errorConsole = {
    timestamp: new Date(),
    status: 404,
    error: 'Not Found',
    message: "Page wasn't found with this path.",
    path: location.pathname
  }

  return (
    <Container>
      <CommandPrompt command={'npm redirect ' + location.pathname}>
        <ConsoleText>SEARCHING PAGE..</ConsoleText>
        <ConsoleText>npm <Strong>ERR!</Strong> Cannot find any page with this path</ConsoleText>
        <NotFoundArea>
          <TitleTextPrompt text="PAGE NOT FOUND" />
          <JSONArea>
            <ConsoleText><pre>{JSON.stringify(errorConsole, null, 2)}</pre></ConsoleText>
          </JSONArea>
          <HRefButtonPrompt text="Back to Home" href="/" marginTop={15} />
        </NotFoundArea>
      </CommandPrompt>
    </Container>
  );
}

export default NotFound;

