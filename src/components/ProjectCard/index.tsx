import React from 'react';

// Assets
import Folder from '../../assets/Folder';
import WebsiteIcon from '../../assets/WebsiteIcon';

// Components
import Bar from '../../components/Bar';

// Styles
import { Container, LanguageArea, SVGArea, Information, Header, Title, FullPath, DescriptionArea, Description } from './styles';

export interface Project {
  id: number;
  name: string;
  full_name: string;
  language: string;
  description?: string;
}

interface Props {
  info: Project;
}

const ProjectCard: React.FC<Props> = ({ info }) => {
  return (
    <Container href={`/projects/${info.name}`}>
      <LanguageArea>
        <SVGArea>{info.language === 'JavaScript' ? <WebsiteIcon size={24} /> : <Folder size={24} />}</SVGArea>
        <Bar right={5} top={-15} width={32} background="rgba(90,94,115,0.09)" />
      </LanguageArea>
      <Information>
        <Header>
          <Title>{info.name}</Title>
          <FullPath>{info.full_name}</FullPath>
        </Header>
        <DescriptionArea>
          <Description>{info.description !== null ? info.description : 'This project might have not description.'}</Description>
        </DescriptionArea>
      </Information>
    </Container>
  );
}

export default ProjectCard;