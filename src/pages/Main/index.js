import React from 'react';

// Components
import HiThereArea from '../../components/HiThereArea';
import BarInBeginPage from '../../components/BarInBeginPage';

// Styles
import { Container, BeginPageArea } from './styles';

export default function Main() {
  return (
    <Container>
      <BeginPageArea>
        <HiThereArea />
        <BarInBeginPage width={72} color="#5a5e73" />
      </BeginPageArea>
      
    </Container>
  );
}
