import React from 'react';

import { Container, Title, Description } from './styles';

interface Props {
  id?: string;
  title: string;
  description: string;
  marginTop?: number;
}

const TransitionText: React.FC<Props> = ({ id, title, description, marginTop }) => {
  return (
    <Container id={id} marginTop={marginTop}>
      <Title>{title ? title : "Put some title here"}</Title>
      <Description>{description ? description : "Put some description here"}</Description>
    </Container>
  );
}

export default TransitionText;