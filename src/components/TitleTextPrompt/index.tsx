import React from 'react';

import { Title } from './styles';

interface Props {
  text: string;
}

const TitleTextPrompt: React.FC<Props> = ({ text }) => {
  return (
    <Title>{text}</Title>
  );
}

export default TitleTextPrompt;