import React from 'react';

import { Container } from './styles';

interface Props {
  text: string;
  href: string;
  marginTop?: number;
}

const HRefButtonPrompt: React.FC<Props> = ({ text, href, marginTop = 0}) => {
  return (
    <Container href={href} marginTop={marginTop}>{text}</Container>
  );
}

export default HRefButtonPrompt;