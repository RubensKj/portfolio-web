import styled from 'styled-components';

interface Props {
  background?: string;
  color?: string;
}

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  min-height: 185px;
  height: 100%;

  background-color: ${(props: Props) => props.background};
`;

export const Text = styled.h2`
  color: ${(props: Props) => props.color} !important;
  text-transform: uppercase;
  font-size: 18px;

  margin-top: 12px;
`;