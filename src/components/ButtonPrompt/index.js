import React from 'react';

import { Container } from './styles';

export default function ButtonPrompt({ text, marginTop }) {
  return (
    <Container marginTop={marginTop}>{text ? text : 'Put some text here'}</Container>
  );
}
