import React from 'react';

// Assets
import Logo from '../../assets/Logo';
import MenuIcon from '../../assets/MenuIcon';

// Styles
import { Container, Wrapper, Redirect, UlList, Link, Text, ButtonResponsiveArea } from './styles';

const Header: React.FC = () => {
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
          <Link href="/projects">
            <Text>Projects</Text>
          </Link>
          <Link href="/certifications">
            <Text>Certifications</Text>
          </Link>
        </UlList>
        <ButtonResponsiveArea>
          <MenuIcon />
        </ButtonResponsiveArea>
      </Wrapper>
    </Container>
  );
}

export default Header;