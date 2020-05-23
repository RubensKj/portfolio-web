import React from 'react';

import { Container, ImageArea, Image, InformationArea, Title } from './styles';

export interface Certification {
  id: number;
  image: string;
  title: string;
}

interface Props {
  info: Certification;
}

const CertificationCard: React.FC<Props> = ({ info }) => {
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

export default CertificationCard;
