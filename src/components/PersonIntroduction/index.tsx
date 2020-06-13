import React from 'react';

import Image from 'react-shimmer';
import NotContentImage from '../NotContentImage';

import { Container, IntroductionArea, ImageArea, DescriptionArea, Description } from './styles';

const PersonIntroduction: React.FC = () => {
  return (
    <Container>
      <IntroductionArea>
        <ImageArea>
          <Image
            src="https://instagram.ffln2-2.fna.fbcdn.net/v/t51.2885-15/e35/47489450_965388186987389_6000681300519320808_n.jpg?_nc_ht=instagram.ffln2-2.fna.fbcdn.net&_nc_cat=105&_nc_ohc=6ktPeqaYP80AX-JQiOu&oh=90d9b037931accd3bc023cd6a73dc1fd&oe=5F106690"
            fallback={
              <Description />
            }
            errorFallback={() => <NotContentImage background="#fafbff" />}
          />
        </ImageArea>
        <DescriptionArea>
          <Description>
            Hello! My name is Rubens Kleinschmidt Junior and I am complete loved about code. I was born in Blumenau, Santa Catarina, and I am 17 years old. I started to use computer on my 8, used to play a lot until my 15 years. On my 15, haft year, I did some courses in Alura about programming, all about Java.
          </Description>
        </DescriptionArea>
      </IntroductionArea>
    </Container>
  );
}

export default PersonIntroduction;