import React from 'react';

// Assets
import Mask from '../../assets/BackgroundProject/Mask.png';
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
  created_at?: Date;
  updated_at?: Date;
  license?: {
    key: string;
    name: string;
    url: string;
  }
  html_url?: string;
}

interface Props {
  info: Project;
  onClickOpenModal: (project: Project) => void;
}

const ProjectCard: React.FC<Props> = ({ info, onClickOpenModal }) => {
  return (
    <Container onClick={() => onClickOpenModal(info)} svg={Mask}>
      <LanguageArea>
        <SVGArea>{info.language === 'JavaScript' ? <WebsiteIcon size={24} /> : <Folder size={24} />}</SVGArea>
        <Bar right={5} top={-15} width={32} background="#00cc74" />
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