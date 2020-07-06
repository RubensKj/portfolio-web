import styled from 'styled-components';

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

export const Comentary = styled.span`
  color: #5972A4;

  font-family: 'Fira Code', monospace;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;

  transition: 0.2s color;

  margin-right: 8px;
`;