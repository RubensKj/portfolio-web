import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #FFF;
  border-radius: 8px;
  border: 1px solid #EFF2F7;
  width: 100%;

  padding: 5px 0;

  overflow: hidden;
`;

export const LanguageArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 5px 15px 5px;
`;

export const SVGArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(90,94,115,0.06);

  padding: 15px;
  border-radius: 10px;

  text-transform: uppercase;
  font-weight: bold;
  color: rgba(90,94,115,0.70);
`;

export const Information = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding: 0 15px 5px;

  width: 100%;
`;

export const Title = styled.h2`
  font-size: 18px;
  text-transform: uppercase;
  color: #3C4858;
`;

export const FullPath = styled.span`
  font-size: 14px;
  color: #8492A6 !important;
`;

export const DescriptionArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 5px 15px;
`;

export const Description = styled.span`
  font-size: 15px;
  color: #8492A6 !important;
`;



