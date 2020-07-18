import React, { useRef, useEffect, InputHTMLAttributes } from 'react';
import { useField } from '@unform/core';
import { IconBaseProps } from 'react-icons';

// Components
import { ConsoleText } from '../CommandPrompt/styles';

import { Container } from './styles';

export interface IInputProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  name: string;
  borderColor?: string;
  icon?: React.ComponentType<IconBaseProps>;
  maxWidth?: number;
  maxHeight?: number;
}

const TextAreaPrompt: React.FC<IInputProps> = ({ name, borderColor, icon: Icon, maxWidth, maxHeight, ...rest }) => {
  const inputRef = useRef<HTMLTextAreaElement>(null);

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
      <Container maxWidth={maxWidth} maxHeight={maxHeight}>
        {Icon && <Icon size={20} />}

        <textarea
          defaultValue={defaultValue}
          ref={inputRef}
          {...rest}
        />
      </Container>

      {error && <ConsoleText>{error}</ConsoleText>}
    </>
  );
}

export default TextAreaPrompt;