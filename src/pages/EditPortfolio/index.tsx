import React from 'react';

// Assets
import GitHubIcon from '../../assets/GitHubIcon';

// Components
import Image from 'react-shimmer';
import TransitionText from '../../components/TransitionText';
import NotContentImage from '../../components/NotContentImage';

import {
  Container, BarSection, Bar, ImageArea, Description,
  ContentForm, Text, Strong, InputArea, Input, Label,
  ButtonArea, Button, TextareaArea, TextareaInput, WrapperContent,
  Title, CardReposArea, CardAddRepo, Header, ContainerCard, Footer
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
          <Input type="text" placeholder="Ex. Rubens Kleinschmidt Jr" />
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
      <CardReposArea>
        <CardAddRepo>
          <Header>
            <Title>Import a Git Repository</Title>
            <GitHubIcon size={32} />
          </Header>
          <form style={{ width: '100%' }}>
            <ContainerCard>
              <Text>Enter the <Strong>URL of a Git repository</Strong> to add it:</Text>
              <InputArea>
                <Input type="text" placeholder="https://my-provider.com/my-organization/my-project" />
              </InputArea>
            </ContainerCard>
            <Footer>
              <ButtonArea>
                <Button>Continue</Button>
              </ButtonArea>
            </Footer>
          </form>
        </CardAddRepo>
      </CardReposArea>
      <WrapperContent>
        <Title>Editting projects</Title>
        <Description>In case you need to change some fields of projects and etc..</Description>
      </WrapperContent>
      <BarSection>
        <Bar />
      </BarSection>
      <WrapperContent>
        <Title>Adding certifications</Title>
        <Description>In case you want to add more certification to your list..</Description>
      </WrapperContent>
      <ContentForm>
        <Text>Certificate File Image</Text>
        <InputArea>
          <Input type="file" />
        </InputArea>
        <Text>Certification Name</Text>
        <InputArea>
          <Input type="text" placeholder="Ex. Java 13: Tire proveito dos novos recursos da linguagem.." />
        </InputArea>
        <Text>Description</Text>
        <TextareaArea>
          <TextareaInput placeholder="Description" />
        </TextareaArea>
        <ButtonArea>
          <Button>Add</Button>
        </ButtonArea>
      </ContentForm>
      <WrapperContent>
        <Title>Editting certifications</Title>
        <Description>In case you need to change some fields of certifications and etc..</Description>
      </WrapperContent>
    </Container>
  );
}

export default EditPortfolio;