import styled from 'styled-components';

interface PropsImage {
  url?: string;
}

export const ColorHeader = styled.div`
  width: 100%;
  background-color: #141729;
  height: 45px;
  box-shadow: 0px 2px 10px 0px rgba(0,0,0,0.4);
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100% - 45px);
  margin: 0 auto;
`;

export const WrapperContent = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 500px;
  width: 100%;
  height: 100%;
  background-color: #141729;
`;

export const ImageArea = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

export const Image = styled.div`
  width: 100%;
  height: auto;
  background-image: url(${(props: PropsImage) => props.url});
  background-position: center center;
  background-repeat: no-repeat;
  background-size: 100% auto;
`;

export const BackArea = styled.a`
  display: flex;
  align-items: center;
  padding: 5px 15px;
  margin: 12px 0;
  width: fit-content;
  cursor: pointer;

  text-decoration: none;

  :hover {
    span {
      color: #00cc74;
      transition: 0.2s color;
    }
  }
`;

export const BackRedirect = styled.span`
  font: 16px 'Poppins',sans-serif;
  color: #5a5e73;
  text-decoration: none;
`;