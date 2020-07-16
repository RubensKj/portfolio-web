import styled from 'styled-components';
import { Form as Unform } from '@unform/web';

interface ButtonProps {
  background?: string;
}

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const Redirection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  overflow-x: auto;

  width: 100%;

  @media only screen and (max-width: 670px) {
    flex-direction: column;
  }
`;

export const Redirect = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;

  text-decoration: none;

  color: #555;

  transition: 0.2s color;

  :hover {
    color: #424242;
  }
`;

export const BarSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 0 auto;
  max-width: 736px;
  padding: 5px 15px;
`;

export const Bar = styled.div`
  width: 100%;
  border-bottom: 1px solid #e8eaeb;
`;

export const ImageArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 15px;

  img {
    width: 100%;
    height: 100%;
    max-width: 320px !important;
    max-height: 315px !important;

    border: 2px solid #00cc74;
    border-radius: 50%;

    @media only screen and (max-width: 500px) {
      max-width: 220px !important;
      max-height: 215px !important;
    }
  }

  transition: 0.2s filter;

  cursor: pointer;

  :hover {
    filter: contrast(75%);
  }
`;

interface IPropsStyles {
  padding?: string;
  paddingbottom?: string;
}

export const ContentForm = styled(Unform) <IPropsStyles>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: ${props => props.padding ? props.padding : '5px 15px'};
  width: 100%;
  margin: 0 auto;
  max-width: 585px;
  
  margin-top: 25px;

  padding-bottom: ${props => props.paddingbottom ? props.paddingbottom : '25px'};
`;

export const Text = styled.span`
  padding: 5px 15px;
  width: 100%;

  font: 16px 'Poppins', sans-serif;
`;

export const Error = styled.span`
  padding: 2px 15px;

  width: 100%;

  color: #d63a46;

  font: 15px 'Poppins', sans-serif;
`;

export const Strong = styled.strong`
  color: #101319;
  font-weight: bold;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  padding: 10px 5px;
  margin-top: 8px;
`;

export const ButtonArea = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;

  padding: 10px 5px;
`;

export const Button = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 4px;
  border: none;
  color: #FFF;

  padding: 5px 15px;
  
  background: ${props => props.background ? props.background : '#00cc74'};

  cursor: pointer;

  font: 16px 'Poppins', sans-serif;

  transition: 0.2s transform;

  :hover {
    transform: translateY(-1px);
  }
`;

export const WrapperContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 5px 15px;
  width: 100%;
  margin: 0 auto;
  max-width: 585px;
  
  margin-top: 15px;
`;

export const Title = styled.h1`
  padding: 5px 15px;
  width: 100%;

  background: transparent;
  border: none;

  color: #555;

  font: 18px 'Poppins', sans-serif;
`;

export const Description = styled.span`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  max-width: 665px;
  width: 100%;

  color: #555;
`;

export const CardReposArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 5px 15px;
  width: 100%;
  margin: 0 auto;
  max-width: 585px;
  
  margin-top: 15px;
`;

export const CardAddRepo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  border-radius: 4px;
  border: 1px solid #e8eaeb;

  margin-bottom: 15px;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 5px 25px;
  width: 100%;
  height: 101px;

  border-bottom: 1px solid #e8eaeb;

  h1 {
    padding: 0;
  }
`;

export const ContainerCard = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 10px 20px;

  input {
    font-size: 15px;
  }
`;

export const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 0 25px;
  width: 100%;

  background: #f5f5f5;
  border-top: 1px solid #e8eaeb;
`;

export const EditProjectCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  height: 100%;
  width: 100%;

  padding: 10px 15px;

  border-top: 1px solid #e8eaeb;
  border-bottom: 1px solid #e8eaeb;

  cursor: pointer;

  h1 {
    padding: 0;
    font-size: 18px;
    text-transform: uppercase;
    font-weight: 500;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  span {
    font-size: 15px;
    color: #8492A6 !important;
    flex: 1;
    -webkit-box-orient: vertical;
    display: block;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  transition: 0.2s background;

  :hover {
    background: #f5f5f5; 
  }
`;

export const Bottom = styled.div`
  padding: 15px 0;
`;