import React from 'react';

import { Container, IntroductionArea, ImageArea, Image, DescriptionArea, Description } from './styles';

const PersonIntroduction: React.FC = () => {
  return (
    <Container>
      <IntroductionArea>
        <ImageArea>
          <Image srcSet="https://instagram.fbnu4-1.fna.fbcdn.net/v/t51.2885-15/e35/47489450_965388186987389_6000681300519320808_n.jpg?_nc_ht=instagram.fbnu4-1.fna.fbcdn.net&_nc_cat=105&_nc_ohc=d_bF-jScEGsAX_xOhcJ&oh=b9ff0f1e7d9f4b1e4854d279a2e8cfa0&oe=5ED11E90" />
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