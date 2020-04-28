import React from 'react';

// Components
import HiThereArea from '../../components/HiThereArea';
import BarInBeginPage from '../../components/BarInBeginPage';
import PersonIntroduction from '../../components/PersonIntroduction';

// Styles
import { Container, BeginPageArea } from './styles';

export default function Main() {
  return (
    <Container>
      <BeginPageArea>
        <HiThereArea />
        <BarInBeginPage width={72} color="#5a5e73" />
      </BeginPageArea>
      <PersonIntroduction></PersonIntroduction>
    </Container>
  );
}
