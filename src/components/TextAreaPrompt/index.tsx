import React from 'react';

import { Container } from './styles';

export interface Props {
  maxWidth?: number;
  maxHeight?: number;
}

const TextAreaPrompt: React.FC<Props> = ({ maxWidth, maxHeight }) => {
  return (
    <Container maxWidth={maxWidth} maxHeight={maxHeight}></Container>
  );
}

export default TextAreaPrompt;