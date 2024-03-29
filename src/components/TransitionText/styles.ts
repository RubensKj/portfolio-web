import styled from 'styled-components';

interface Props {
  marginTop?: number;
  paddingTop?: number;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: ${(props: Props) => props.marginTop !== undefined ? props.marginTop + 'px' : '65px'};
  padding-top: ${(props: Props) => props.paddingTop !== undefined ? props.paddingTop + 'px' : '65px'} !important;
  margin-bottom: 50px;

  transition: 0.2s padding;

  @media only screen and (max-width: 720px) {
    padding: 0 15px;
  }
`;

export const Title = styled.h1`
  font-size: 20px;
  text-align: center;
  color: #00cc74;
`;

export const Description = styled.span`
  font-size: 16px;
  color: #8492A6 !important;
  text-align: center;
  max-width: 565px;
`;