import React from 'react';

import { Container, ImageArea, Image, InformationArea, Title } from './styles';

export default function CertificationCard({ info }) {
  return (
    <Container href="/">
      {info.image ? (
        <ImageArea>
          <Image src={info.image} alt="Certification Logo" />
        </ImageArea>
      ) : 'Not image content'}
      <InformationArea>
        <Title>{info.title}</Title>
      </InformationArea>
    </Container>
  );
}
