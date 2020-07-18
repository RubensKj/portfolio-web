import React, { useState } from 'react';

// Contexts
import { useAuth } from '../../contexts/auth';

// Assets
import Logo from '../../assets/Logo';
import MenuIcon from '../../assets/MenuIcon';

// Styles
import {
  Container, Wrapper, Redirect, UlList, Link, Text,
  ButtonResponsiveArea, ContainerBar, ListOptions, DivisionText,
  RedirectSubmenu, LiItem, ButtonArea, AuthButton
} from './styles';

const Header: React.FC = () => {
  const { signed, logout } = useAuth();

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
            {signed ? (
              <>
                <Link href="/edit">
                  <Text>Edit Portfolio</Text>
                </Link>
                <AuthButton onClick={logout} marginTop="6px" padding="2px 15px">
                  <LiItem>
                    <Text>Logout</Text>
                  </LiItem>
                </AuthButton>
              </>
            ) : (
                <AuthButton href="/login" marginTop="5.5px" padding="2px 15px">
                  <LiItem>
                    <Text>Login</Text>
                  </LiItem>
                </AuthButton>
              )}
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
            {signed && (
              <RedirectSubmenu href="/edit">
                <LiItem>
                  <Text>Edit Portfolio</Text>
                </LiItem>
              </RedirectSubmenu>
            )}
            <DivisionText>Authentication</DivisionText>
            {signed ? (
              <ButtonArea>
                <AuthButton onClick={logout}>
                  <LiItem>
                    <Text>Logout</Text>
                  </LiItem>
                </AuthButton>
              </ButtonArea>
            ) : (
                <ButtonArea>
                  <AuthButton href="/login">
                    <LiItem>
                      <Text>Login</Text>
                    </LiItem>
                  </AuthButton>
                </ButtonArea>
              )}
          </ListOptions>
        </ContainerBar>
      )}
    </>
  );
}

export default Header;