import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  min-height: 465px;
  background: #00cc74;
  margin-top: 50px;

  transition: 0.2s min-height;
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
  top: 80px;
  margin-left: -1245px;

  transition: 0.2s transform, position;

  /* Responsive style */
  @media only screen and (max-width: 1280px) {
    display: flex;
    top: 75px;
    margin-left: initial;
    transform: scale(0.8);
  }

  @media only screen and (max-width: 720px) {
    display: grid;
    grid-template-columns: repeat(auto-fill,minmax(170px,1fr));
    width: 100%;
    gap: 30px;
    justify-items: center;
    position: initial;
    margin-bottom: 30px;
    transform: scale(0.7);
  }

  @media only screen and (max-width: 400px) {
    grid-template-columns: repeat(auto-fill,minmax(140px,1fr));
  }

  @media only screen and (max-width: 330px) {
    grid-template-columns: repeat(auto-fill,minmax(120px,1fr));
  }
`;

export const Title = styled.div`
  font-size: 38px;
  color: #FFF;
  text-align: center;

  margin-top: 55px;
`;

export const Description = styled.span`
  font-size: 20px;
  color: #FFF;
  text-align: center;

  margin-top: 15px;
  max-width: 565px;
`;

