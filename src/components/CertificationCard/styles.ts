import styled from 'styled-components';

export const Container = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #FFF;
  border-radius: 8px;
  border: 1px solid #EFF2F7;
  width: 100%;
  color: #3C4858;

  padding: 10px;

  overflow: hidden;
  text-decoration: none;
`;

export const ImageArea = styled.div`
  max-width: 300px;
  max-height: 200px;

  width: 100%;
  height: 100%;

  border-radius: 5px;
  overflow: hidden;

  transition: 0.2s max-width;

  img {
    width: 100%;
    height: 100%;
  }

  @media only screen and (max-width: 915px) and (min-width: 700px) {
    max-width: none;
  }

  @media only screen and (max-width: 620px) and (min-width: 370px) {
    max-width: none;
  }
`;


export const InformationArea = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;

  width: 100%;
  padding: 5px 0 0;
`;

export const Title = styled.span`
  font-size: 15px;
  color: #8492A6 !important;
  width: 100%;

  /* white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; */
`;