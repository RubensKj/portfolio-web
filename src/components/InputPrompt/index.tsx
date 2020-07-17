import React, { useRef, useEffect } from 'react';
import { useField } from '@unform/core';

import { Input } from './styles';

export interface Props {
  name: string;
  type: string;
  placeHolder?: string;
  maxWidth?: number;
}

const InputPrompt: React.FC<Props> = ({ name, type, placeHolder, maxWidth }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, defaultValue, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Input
      ref={inputRef}
      type={type}
      placeholder={placeHolder}
      maxWidth={maxWidth}
      defaultValue={defaultValue}
    />
  );
}

export default InputPrompt;