import React from 'react';

// Assets
import Logo from '../../assets/Logo';

// Styles
import { Container, Wrapper, Redirect, UlList, Link, Text } from './styles';

export default function Header() {
  return (
    <Container>
      <Wrapper>
        <Redirect href="/">
          <Logo />
        </Redirect>
        <UlList>
          <Link href="#home">
            <Text>Home</Text>
          </Link>
          <Link href="#projects">
            <Text>Projects</Text>
          </Link>
          <Link href="#home">
            <Text>Certifications</Text>
          </Link>
        </UlList>
      </Wrapper>
    </Container>
  );
}
