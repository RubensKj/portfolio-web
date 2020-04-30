import React from 'react';

// Assets
import IntellijIcon from '../../assets/IntellijIcon';
import JavaIcon from '../../assets/JavaIcon';
import ReactIcon from '../../assets/ReactIcon';
import MongoDBIcon from '../../assets/MongoDBIcon';
import SpringBootIcon from '../../assets/SpringBootIcon';
import VSCodeIcon from '../../assets/VSCodeIcon';

// Components
import ItemFloat from '../ItemFloat';

// Styles
import { Container, Wrapper, WrapperFloat, Title, Description } from './styles';

export default function DeveloperStuffsArea() {
  return (
    <Container>
      <Wrapper>
        <Title>My developer stuffs</Title>
        <Description>These are what I use for code, languages, IDEs and etc.</Description>
      </Wrapper>
      <WrapperFloat>
        <ItemFloat image={<IntellijIcon size={149} />} top={20} left={55} width={120} height={120} />
        <ItemFloat image={<JavaIcon width={95} height={84} />}  top={92} left={270} width={145} height={145} />
        <ItemFloat image={<SpringBootIcon size={48} />} top={20} left={535} width={95} height={95} />
        <ItemFloat image={<ReactIcon width={98} height={85} />} top={92} left={760} width={145} height={145} />
        <ItemFloat image={<MongoDBIcon width={89} height={68} />} top={20} left={995} width={85} height={85} />
        <ItemFloat image={<VSCodeIcon size={42} />}  top={75} left={1175} width={65} height={65} />
      </WrapperFloat>
    </Container>
  );
}