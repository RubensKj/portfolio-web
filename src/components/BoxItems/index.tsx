import React, { ReactNode } from 'react';

import { Container, Header, Title, Items } from './styles';

interface Props {
  title: string;
  icon: ReactNode;
  children: any;
}

const BoxItems: React.FC<Props> = ({ title, icon, children }) => {
  return (
    <Container>
      <Header>
        <Title>{title}</Title>
        {icon}
      </Header>
      <Items>
        {children}
      </Items>
    </Container>
  );
}

export default BoxItems;