import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  top: ${props => props.top ? props.top + 'px' : '0px'};
  right: ${props => props.right ? props.right + 'px' : '0px'};
  left: ${props => props.left ? props.left + 'px' : '0px'};
  bottom: ${props => props.bottom ? props.bottom + 'px' : '0px'};
`;

export const BarDiv = styled.div`
  width: ${props => props.width ? props.width + 'px' : '20px'};
  height: ${props => props.height ? props.height + 'px' : '4px'};
  background: ${props => props.background ? props.background : '#5a5e73'};;
  border-radius: 5px;
`;

