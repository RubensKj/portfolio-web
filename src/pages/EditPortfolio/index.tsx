import React from 'react';

// Components
import Image from 'react-shimmer';
import TransitionText from '../../components/TransitionText';
import NotContentImage from '../../components/NotContentImage';

import {
  Container, BarSection, Bar, ImageArea, Description,
  ContentForm, Text, InputArea, Input, Label, ButtonArea,
  Button, TextareaArea, TextareaInput, WrapperContent, Title
} from './styles';

const EditPortfolio: React.FC = () => {
  return (
    <Container>
      <TransitionText title="Editting Portfolio" description="Here you can change all the things that is shown to user on the main page and the secondary pages." marginTop={0} paddingTop={115} />
      <BarSection>
        <Bar />
      </BarSection>
      <WrapperContent>
        <Title>Person Infomartion</Title>
        <Description>In case you want to change the main things that is shown to user.</Description>
      </WrapperContent>
      <ContentForm>
        <ImageArea>
          <Image
            src="https://instagram.ffln2-2.fna.fbcdn.net/v/t51.2885-15/e35/47489450_965388186987389_6000681300519320808_n.jpg?_nc_ht=instagram.ffln2-2.fna.fbcdn.net&_nc_cat=105&_nc_ohc=6ktPeqaYP80AX-JQiOu&oh=90d9b037931accd3bc023cd6a73dc1fd&oe=5F106690"
            fallback={
              <Description />
            }
            errorFallback={() => <NotContentImage background="#fafbff" />}
          />
        </ImageArea>
        <Label>label_to_arquivo_selected.png</Label>
        <Text>Displayed name</Text>
        <InputArea>
          <Input placeholder="Ex. Rubens Kleinschmidt Jr" />
        </InputArea>
        <Text>Description</Text>
        <TextareaArea>
          <TextareaInput placeholder="Description" />
        </TextareaArea>
        <ButtonArea>
          <Button>Save</Button>
        </ButtonArea>
      </ContentForm>
      <BarSection>
        <Bar />
      </BarSection>
      <WrapperContent>
        <Title>Adding repositories</Title>
        <Description>Here you can add the repositories from Github</Description>
      </WrapperContent>
    </Container>
  );
}

export default EditPortfolio;