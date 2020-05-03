import React from 'react';

// Assets
import InstragramIcon from '../../assets/InstagramIcon';
import GitHubIcon from '../../assets/GitHubIcon';

// Styles
import { Container, Wrapper, Text, Strong, UlList, Li, Redirect } from './styles';

export default function Footer() {
  return (
    <Container>
      <Wrapper>
        <Text>2020-2021 - <Strong>RubensKj</Strong>.</Text>
        <UlList>
          <Li>
            <Redirect href="https://www.instagram.com/rubenskjr/">
              <InstragramIcon size={15} />
            </Redirect>
          </Li>
          <Li>
            <Redirect href="https://github.com/RubensKj">
              <GitHubIcon size={15} />
            </Redirect>
          </Li>
        </UlList>
      </Wrapper>
    </Container>
  );
}
