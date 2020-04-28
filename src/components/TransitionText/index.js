import React from 'react';

import { Container, Title, Description } from './styles';

export default function TransitionText({ id, title, description, marginTop }) {
  return (
    <Container id={id} marginTop={marginTop}>
      <Title>{title ? title : "Put some title here"}</Title>
      <Description>{description ? description : "Put some description here"}</Description>
    </Container>
  );
}
