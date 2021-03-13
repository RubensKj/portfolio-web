import React from 'react';

import Image from 'react-shimmer';
import NotContentImage from '../NotContentImage';

import { Container, IntroductionArea, ImageArea, DescriptionArea, Description } from './styles';

export interface Person {
  displayedName?: string;
  description?: string;
  avatar?: string;
  file?: File;
}

interface Props {
  person: Person;
}

const PersonIntroduction: React.FC<Props> = ({ person }) => {
  return (
    <Container>
      <IntroductionArea>
        <ImageArea>
          {person && person.avatar && (
            <Image
              src={person.avatar ? person.avatar : ''}
              fallback={
                <Description />
              }
              errorFallback={() => <NotContentImage background="#fafbff" />}
            />
          )}
        </ImageArea>
        <DescriptionArea>
          <Description>
            {person && person.description}
          </Description>
        </DescriptionArea>
      </IntroductionArea>
    </Container>
  );
}

export default PersonIntroduction;