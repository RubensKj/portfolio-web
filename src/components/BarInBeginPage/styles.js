import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  bottom: 22px;
`;

export const Bar = styled.div`
  width: ${props => props.width ? (props.width + 'px') : ('20px')};
  height: 6px;
  background: ${props => props.color ? props.color : "#00cc74"};
  border-radius: 5px;  
`;