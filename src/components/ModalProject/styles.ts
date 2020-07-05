import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  padding: 8px 0;

  margin-bottom: 15px;
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

export const Container = styled.div`
  width: 100%;
  padding-bottom: 15px;
`;

export const CodeLine = styled.div`
  display: flex;

  span {
    font-family: 'Fira Code', monospace;
    font-weight: 500;
    font-size: 16px;

    margin-right: 8px;
  }
`;

export const Title = styled.span`
  color: #F1FA8C;
  font-family: 'Fira Code', monospace;
  font-weight: 500;
  font-size: 18px;
`;

export const Keyword = styled.span`
  color: #da65b3;
`;

export const Variable = styled.span`
  color: #7865bb;
`;

export const String = styled.span`
  color: #F1FA8C;
  font-weight: 400 !important;
`;
