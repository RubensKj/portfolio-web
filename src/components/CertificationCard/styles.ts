import styled from 'styled-components';

interface Props {
  svg?: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background: url(${(props: Props) => props.svg}) bottom center;
  background-color: #23212b;
  background-size: 100%;
  background-repeat: no-repeat;

  border-radius: 8px;
  border: 1px solid #2c2b35;
  width: 100%;
  color: #3C4858;

  padding: 10px;
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 19px 2px;

  overflow: hidden;

  transition: 0.2s transform;

  :hover {
    transform: translateY(-2px);
  }
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

export const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  text-align: center;

  min-height: 185px;
  height: 100%;
  background-color: rgba(44, 43, 53, 0.55);
`;

export const LoadingSpan = styled.span`
  width: 100%;
  height: 100%;

  font-size: 18px;
  color: #e2e2e2 !important;
  text-transform: uppercase;
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

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;