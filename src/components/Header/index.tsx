import React, { useState } from 'react';

// Assets
import Logo from '../../assets/Logo';
import MenuIcon from '../../assets/MenuIcon';

// Styles
import {
  Container, Wrapper, Redirect, UlList, Link, Text,
  ButtonResponsiveArea, ContainerBar, ListOptions, DivisionText,
  RedirectSubmenu, LiItem
} from './styles';

const Header: React.FC = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  function toggleIsClicked(): void {
    setIsClicked(!isClicked);
  }

  return (
    <>
      <Container>
        <Wrapper>
          <Redirect href="/">
            <Logo />
          </Redirect>
          <UlList>
            <Link href="/projects">
              <Text>Projects</Text>
            </Link>
            <Link href="/certifications">
              <Text>Certifications</Text>
            </Link>
          </UlList>
          <ButtonResponsiveArea onClick={toggleIsClicked}>
            <MenuIcon />
          </ButtonResponsiveArea>
        </Wrapper>
      </Container>
      {isClicked && (
        <ContainerBar>
          <ListOptions>
            <DivisionText>Contents</DivisionText>
            <RedirectSubmenu href="/projects">
              <LiItem>
                <Text>Projects</Text>
              </LiItem>
            </RedirectSubmenu>
            <RedirectSubmenu href="/certifications">
              <LiItem>
                <Text>Certifications</Text>
              </LiItem>
            </RedirectSubmenu>
          </ListOptions>
        </ContainerBar>
      )}
    </>
  );
}

export default Header;