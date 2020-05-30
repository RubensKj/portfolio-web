import React from 'react';

// Components
import CertificationCard from '../CertificationCard';

// Interface
import { Certification } from '../CertificationCard';

// Styles
import { Container, List } from './styles';


interface Props {
  list: Certification[];
}

const ListCertifications: React.FC<Props> = ({ list }) => {

  const info1 = {
    id: 1,
    image: 'https://image.prntscr.com/image/uMVvEYgfS_q3qzzRO_fQHw.png',
    title: 'Java 8: Tire proveito dos novos recursos da linguagem'
  }

  const info2 = {
    id: 2,
    image: 'https://image.prntscr.com/image/IHlxEfKzSF2ZZ69N_2kfyQ.png',
    title: 'Formação JAVA'
  }

  const info3 = {
    id: 3,
    image: 'https://image.prntscr.com/image/IHlxEfKzSF2ZZ69N_2kfyQ.png',
    title: 'Spring Boot Web'
  }

  const info4 = {
    id: 4,
    image: 'https://instagram.ffln2-2.fna.fbcdn.net/v/t51.2885-15/e35/56162978_408907843284989_4050829137058496959_n.jpg?_nc_ht=instagram.ffln2-2.fna.fbcdn.net&_nc_cat=105&_nc_ohc=soc6B5DlxbUAX87lK_Y&oh=285cb2673d37f79f2d0d3c240f9a7387&oe=5ED6E6E2',
    title: 'Testing image giant'
  }

  return (
    <Container>
      <List>
        <CertificationCard info={info1} />
        <CertificationCard info={info2} />
        <CertificationCard info={info3} />
        <CertificationCard info={info4} />
        <CertificationCard info={info2} />
        <CertificationCard info={info2} />
        {/* {list && list.map(certification => (
          <CertificationCard key={certification.id} info={certification} />
        ))} */}
      </List>
    </Container>
  );
}

export default ListCertifications;