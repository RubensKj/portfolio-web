import React from 'react';

import { Container } from './styles';

function HRefButtonPrompt({ text, href, marginTop}) {
  return (
    <Container href={href ? href : '/'} marginTop={marginTop}>{text ? text : 'Put some text here'}</Container>
  );
}

export default HRefButtonPrompt;