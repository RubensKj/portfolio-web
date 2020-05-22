import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;

  display: flex;
  align-items: center;

  width: 100%;
  height: 45px;
  background-color: #141729;

  padding: 8px 15px;
  color: #5a5e73;
  opacity: 0.89;
  z-index: 999;
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  opacity: 1;
`;

export const Redirect = styled.a`
  color: #5a5e73;
  text-decoration: none;
  cursor: pointer;

  :hover {
    color: #00cc74;
    transition: 0.2s color;
  }
`;

export const UlList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;

  @media only screen and (max-width: 720px) {
    display: none;
  }
`;

export const Link = styled.a`
  color: #5a5e73;
  text-decoration: none;
  cursor: pointer;

  && {
    margin-right: 25px;
  }

  :hover {
    color: #00cc74;
    transition: 0.2s color;
  }
`;

export const Text = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonResponsiveArea = styled.div`
  @media only screen and (min-width: 720px) {
    display: none;
  }

  display: flex;
  justify-content: center;
  align-items: center;
  
  padding: 10px;
  border-radius: 50%;
  cursor: pointer;

  transition: 0.2s background, display;

  :hover {
    background: #1b1f35;
    svg {
      stroke: #00cc74;
      transition: 0.2s stroke;
    }
  }
`;