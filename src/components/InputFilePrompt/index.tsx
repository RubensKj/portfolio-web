import React, { useRef, useEffect } from 'react';
import { useField } from '@unform/core';

// Components
import { ConsoleText } from '../CommandPrompt/styles';

import { Container } from './styles';

interface Props {
  name: string;
  maxWidth?: number;
}

type InputProps = JSX.IntrinsicElements['input'] & Props;

const InputFilePrompt: React.FC<InputProps> = ({ name, maxWidth, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, registerField, error } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'files[0]',
      clearValue(ref: HTMLInputElement) {
        ref.value = '';
      }
    })
  }, [fieldName, registerField]);

  return (
    <Container maxWidth={maxWidth} >
      <input
        type="file"
        ref={inputRef}
        {...rest}
      />

      {error && <ConsoleText>{error}</ConsoleText>}
      <div style={{ marginBottom: '8px' }} />
    </Container>
  );
}

export default InputFilePrompt;