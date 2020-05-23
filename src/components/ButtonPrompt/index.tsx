import React from 'react';

import { Container } from './styles';

export interface Props {
  text: string;
  marginTop?: number;
}

const ButtonPrompt: React.FC<Props> = ({ text, marginTop }) => {
  return (
    <Container marginTop={marginTop}>{text}</Container>
  );
}

export default ButtonPrompt;