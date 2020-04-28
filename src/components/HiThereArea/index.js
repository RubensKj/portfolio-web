import React from 'react';

// Assets
import MainArrow from '../../assets/MainArrow';

import { Container, Content, LowerText, CodeTextArea, CodeNameArea, HigherText } from './styles';

export default function HiThereArea() {
  return (
    <Container>
      <Content>
        <LowerText>Hi there! My name is</LowerText>
        <CodeTextArea>
          <MainArrow />
          <CodeNameArea>
            <HigherText>Rubens Kleinschmidt Jr</HigherText>
          </CodeNameArea>
        </CodeTextArea>
      </Content>
    </Container>
  );
}
