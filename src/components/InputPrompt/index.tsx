import React from 'react';

import { Input } from './styles';

export interface Props {
  type: string;
  placeHolder?: string;
  maxWidth?: number;
}

const InputPrompt: React.FC<Props> = ({ type, placeHolder, maxWidth }) => {
  return (
    <Input type={type} placeholder={placeHolder} maxWidth={maxWidth} />
  );
}

export default InputPrompt;