import React from 'react';

import { Input } from './styles';

export default function InputPrompt({ type, placeHolder, autoComplete, maxWidth }) {
  return (
    <Input type={type} placeholder={placeHolder} autoComplete={autoComplete} maxWidth={maxWidth} />
  );
}
