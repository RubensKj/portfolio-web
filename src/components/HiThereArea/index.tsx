import React from 'react';

// Assets
import MainArrow from '../../assets/MainArrow';

import { Container, Content, LowerText, CodeTextArea, CodeNameArea, HigherText } from './styles';

interface Props {
  displayedName: string;
}

const HiThereArea: React.FC<Props> = ({ displayedName }) => {
  return (
    <Container>
      <Content>
        <LowerText>Hi there! My name is</LowerText>
        <CodeTextArea>
          <MainArrow />
          <CodeNameArea>
            <HigherText>{displayedName}</HigherText>
          </CodeNameArea>
        </CodeTextArea>
      </Content>
    </Container>
  );
}

export default HiThereArea;
