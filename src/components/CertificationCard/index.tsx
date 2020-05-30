import React from 'react';

import Image from 'react-shimmer';
import NotContentImage from '../NotContentImage';

import { Container, ImageArea, LoadingWrapper, LoadingSpan, InformationArea, Title } from './styles';

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
      <ImageArea>
        <Image
          src={info.image}
          fallback={
            <LoadingWrapper>
              <LoadingSpan>Loading..</LoadingSpan>
            </LoadingWrapper>
          }
          errorFallback={() => <NotContentImage />}
        />
      </ImageArea>
      <InformationArea>
        <Title>{info.title}</Title>
      </InformationArea>
    </Container>
  );
}

export default CertificationCard;
