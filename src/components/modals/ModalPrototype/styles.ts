import styled from 'styled-components';

export const Header = styled.div`
  display: flex;
  padding: 8px 2px;
  
  margin-bottom: 8px;
`;

interface Color {
  color?: string;
  hoverColor?: string;
}

export const Dot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: ${(props: Color) => props.color};
  margin-right: 8px;
  cursor: pointer;

  transition: 0.2s background;

  :hover {
    background: ${(props: Color) => props.hoverColor};
  }
`;