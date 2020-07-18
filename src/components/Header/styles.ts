import styled from 'styled-components';

export const Container = styled.header`
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

export const ContainerBar = styled.div`
  z-index: 998;

  position: fixed;
  padding-top: 45px;
  width: 100%;
  height: 100%;
  background: rgba(20, 23, 41, 0.97);

  transition: 0.2s background;
`;

export const ListOptions = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;

  padding: 10px 0;

  width: 100%;
  height: 100%;
  overflow-y: auto;
`;

export const DivisionText = styled.span`
  width: 100%;
  color: #00cc74 !important;
  padding: 10px 25px;
  font-size: 18px;

  border-bottom: 1px solid #111321;
`;

export const RedirectSubmenu = styled.a`
  width: 100%;
  margin-bottom: 5px;
  text-decoration: none;

  color: #8492A6 !important;

  transition: 0.2s background;

  :hover {
    color: #00cc74 !important;
    background: rgba(20, 23, 41, 0.98);
  }
`;

export const LiItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  list-style: none;

  padding: 10px 20px;

  width: 100%;
  height: 100%;
`;

// Auth Buttons

export const ButtonArea = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  padding: 0 15px;
`;

export const AuthButton = styled.a`
  margin-top: 8px;
  margin-bottom: 5px;
  text-decoration: none;

  padding: 3px 15px;
  border-radius: 4px;

  background: #00cc74;
  color: #FFF !important;

  border: none;
  border-bottom: 2px solid #017945;

  transition: 0.2s background;

  li {
    padding: 5px 15px !important;
  }

  :hover {
    background: #0ca562;
    border-bottom: 2px solid #0ca562;
  }
`;