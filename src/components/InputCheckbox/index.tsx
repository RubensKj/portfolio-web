import React, { useEffect, useState, useRef, InputHTMLAttributes, useCallback } from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

export interface CheckboxOption {
  id: string;
  value: string;
  label: string;
}

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  option: {
    id: string;
    value: string;
    label: string;
  };
}

const InputCheckbox: React.FC<Props> = ({ name, option, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [checked, setChecked] = useState(false);

  const { fieldName, registerField, defaultValue } = useField(name);

  const handleInputCheck = useCallback(() => {
    setChecked(!!inputRef.current?.checked);
  }, []);

  useEffect(() => {
    function handleDefaultPreview() {
      if (defaultValue) {
        setChecked(defaultValue);
      }
    }

    handleDefaultPreview();
  }, [defaultValue]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'checked'
    });
  }, [defaultValue, fieldName, registerField]);

  return (
    <Container checked={checked}>
      <label htmlFor={option.id} key={option.id} style={{ display: 'flex', }}>
        <label htmlFor={option.id} key={option.id} />
        <input
          defaultChecked={defaultValue ? defaultValue : false}
          onChange={handleInputCheck}
          ref={inputRef}
          value={option.value}
          type="checkbox"
          id={option.id}
          {...rest}
        />
        <span>{option.label}</span>
      </label>
    </Container>
  );
};

export default InputCheckbox;