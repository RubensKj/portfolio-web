import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const BeginPageArea = styled.div`
  width: 100%;
  height: 100%; 
  background-color: #141729;
`;

export const Anchor = styled.div`
  display: block;
  height: ${props => props.height ? props.height + 'px' : '85px'}; /*same height as header*/
  margin-top: -105px; /*same height as header*/
  visibility: hidden;
`;