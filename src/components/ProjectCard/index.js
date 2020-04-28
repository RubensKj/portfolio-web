import React from 'react';

// Assets
import WebsiteIcon from '../../assets/WebsiteIcon';

// Components
import Bar from '../../components/Bar';

// Styles
import { Container, LanguageArea, SVGArea, Information, Header, Title, FullPath, DescriptionArea, Description } from './styles';

export default function ProjectCard() {
  return (
    <Container>
      <LanguageArea>
        <SVGArea><WebsiteIcon size={24} /></SVGArea>
        <Bar right={5} top={-15} width={32} background="rgba(90,94,115,0.09)" />
      </LanguageArea>
      <Information>
        <Header>
          <Title>api-azure-maps</Title>
          <FullPath>RubensKj/api-azure-maps</FullPath>
        </Header>
        <DescriptionArea>
          <Description>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</Description>
        </DescriptionArea>
      </Information>
    </Container>
  );
}
