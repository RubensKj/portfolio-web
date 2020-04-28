import styled from 'styled-components';

export const Container = styled.div`
  
`;

export const IntroductionArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  margin-top: 100px;
  margin-bottom: 50px;
`;

export const ImageArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Image = styled.img`
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
`;

export const DescriptionArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px 15px;
  width: 100%;
  max-width: 765px;
  
  margin-top: 25px;

  padding-bottom: 25px;
  border-bottom: 1px solid rgba(90, 94, 115, 0.09);
`;

export const Description = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-width: 565px;
`;