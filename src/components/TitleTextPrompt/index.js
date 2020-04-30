import React from 'react';

import { Title } from './styles';

export default function TitleTextPrompt({ text }) {
  return (
    <Title>{text ? text : 'Put some title here'}</Title>
  );
}
