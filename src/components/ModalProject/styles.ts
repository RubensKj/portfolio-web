import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  padding: 8px 2px;
  
  margin-bottom: 8px;
`;

interface Color {
  color?: string;
  hoverColor?: string;
}

export const Dot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${(props: Color) => props.color};
  margin-right: 8px;
  cursor: pointer;

  transition: 0.2s background;

  :hover {
    background: ${(props: Color) => props.hoverColor};
  }
`;

export const Container = styled.div`
  width: 100%;

  padding: 0 8px;

  overflow-y: auto;

  max-height: 610px !important;

  /* width */
  ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #2c2b35;
    border-radius: 2px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #49e287;
    border-radius: 8px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #40bb72;
  }
`;

export const ImageArea = styled.div`
  width: 100%;
  border-radius: 8px;
`;

export const Image = styled.img`
  width: 100%;
  border-radius: 8px;

  max-height: 610px;
  height: 100%;
`;

export const HeaderProject = styled.header`
  display: flex;
  flex-direction: column;
`;

export const Separator = styled.div`
  border-bottom: 1px solid #2c2b35;

  margin-bottom: 15px;
  padding-bottom: 15px;
`;

export const Title = styled.span`
  color: #F1FA8C;
  font-family: 'Fira Code', monospace;
  font-weight: 500;
  font-size: 20px;

  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const Description = styled.span`
  color: #FFFFFF;
  font-family: 'Fira Code', monospace;
  font-weight: 400;
  font-size: 16px;

  margin-top: 10px;
`;

export const CodeArea = styled.div`
  display: flex;
  flex-direction: column;

  padding: 5px 15px; 
  border-radius: 4px;
  border: 1px solid rgba(47, 45, 58, 0.6);

  background: #2c2b35;
  overflow: hidden;
`;

export const WrapperCodeLine = styled.div`
  width: 100%;
  overflow: auto;

    /* width */
    ::-webkit-scrollbar {
    width: 10px;
    height: 8px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #2c2b35;
    border-radius: 2px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #49e287;
    border-radius: 8px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #40bb72;
  }
`;

export const CodeLine = styled.div`
  display: flex;
  white-space: nowrap;
  line-height: 26px;

  strong {
    font-family: 'Fira Code', monospace;
    font-weight: 500;
    font-size: 16px;

    margin-right: 8px;
  }
`;

export const Comentary = styled.span`
  color: #5972A4;

  font-family: 'Fira Code', monospace;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;

  transition: 0.2s color;

  margin-right: 8px;
`;

export const Word = styled.strong`
  color: #FFFFFF;
`;

export const Keyword = styled.strong`
  color: #da65b3;
`;

export const Variable = styled.strong`
  color: #9f8aec;
`;

export const StringWithoutSpace = styled.strong`
  color: #F1FA8C;
  font-weight: 400 !important;

  margin-right: 0 !important;
`;

export const Footer = styled.footer`
  padding: 0 8px;

  padding-bottom: 15px;
`;

export const Redirect = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;

  width: fit-content;

  cursor: pointer;

  :hover {
    span {
      color: #4f6590 !important;
    }
  }

  span {
    font-size: 14px !important;

    margin-left: 8px;
  }
`;