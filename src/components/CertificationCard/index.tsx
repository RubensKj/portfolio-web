import React from 'react';

import Image from 'react-shimmer';
import Loader from 'react-loader-spinner'
import NotContentImage from '../NotContentImage';

import { Container, ImageArea, InformationArea, Title } from './styles';

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
            <Loader
              type="Grid"
              color="#00cc74"
              height={85}
              width={85}
            />
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
