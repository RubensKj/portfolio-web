import React, { useRef, useEffect, InputHTMLAttributes } from 'react';
import { useField } from '@unform/core';

// Components
import { ConsoleText } from '../CommandPrompt/styles';

import { Input } from './styles';

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  type: string;
  placeHolder?: string;
  maxWidth?: number;
}

const InputPrompt: React.FC<Props> = ({ name, type, placeHolder, maxWidth, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, defaultValue, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <>
      <Input
        ref={inputRef}
        type={type}
        placeholder={placeHolder}
        maxWidth={maxWidth}
        defaultValue={defaultValue}
        {...rest}
      />

      {error && <ConsoleText>{error}</ConsoleText>}
      <div style={{ marginBottom: '8px' }} />
    </>
  );
}

export default InputPrompt;