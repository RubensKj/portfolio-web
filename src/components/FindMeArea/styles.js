import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 465px;
  background: #00cc74;
  margin-top: 50px;
  
  transition: 0.2s height;

  @media only screen and (max-width: 720px) {
    height: 495px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;

  transition: 0.2s padding;

  @media only screen and (max-width: 720px) {
    padding: 0 15px;
  }
`;

export const WrapperFloat = styled.div`
  position: relative;
  top: -200px;
  z-index: 10;
  margin-left: -1245px;
`;

export const Title = styled.div`
  font-size: 38px;
  color: #FFF;

  margin-top: 55px;
`;

export const Description = styled.span`
  font-size: 20px;
  color: #FFF;

  margin-top: 15px;
  max-width: 565px;
`;

