import React from 'react';

// Assets
import PromptIcon from '../../assets/PromptIcon';
import MinimizeIcon from '../../assets/MinimizeIcon';
import MaximizeIcon from '../../assets/MaximizeIcon';
import CloseIcon from '../../assets/CloseIcon';

// Styles
import {
  Container, Wrapper, Header, TitleArea, Title, TabButtonArea,
  Button, Content, ConsoleText, BlankSpace
} from './styles';

interface Params {
  command?: string;
  marginBottom?: string;
  children?: any;
}

const CommandPrompt: React.FC<Params> = ({ command, marginBottom = '0', children }) => {
  return (
    <Container marginBottom={marginBottom}>
      <Wrapper>
        <Header>
          <TitleArea>
            <PromptIcon size={15} />
            <Title>Command Prompt</Title>
          </TitleArea>
          <TabButtonArea>
            <Button>
              <MinimizeIcon />
            </Button>
            <Button>
              <MaximizeIcon size={20} />
            </Button>
            <Button>
              <CloseIcon />
            </Button>
          </TabButtonArea>
        </Header>
        <Content>
          <ConsoleText>RubensKj Portfolio [Version 10.0.38324.283]</ConsoleText>
          <ConsoleText>2020 RubensKj.</ConsoleText>
          <BlankSpace />
          <ConsoleText>C:\Users\RubensKj>{command ? command : 'npm start'}</ConsoleText>
          {children}
        </Content>
      </Wrapper>
    </Container>
  );
}

export default CommandPrompt;