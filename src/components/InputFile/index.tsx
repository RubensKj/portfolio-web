import React, { ChangeEvent, useRef, useEffect, useCallback, useState } from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

interface Props {
  name: string;
  borderColor?: string;
  background?: string;
  styleContainer?: object;
}

type InputProps = JSX.IntrinsicElements['input'] & Props;

const InputFile: React.FC<InputProps> = ({ name, borderColor, background, styleContainer, ...rest }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const { fieldName, registerField, defaultValue } = useField(name);
  const [preview, setPreview] = useState(defaultValue);

  const handlePreview = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (!file) {
      setPreview(null);
    }

    let previewURL = URL.createObjectURL(file);
    setPreview(previewURL);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'files[0]',
      clearValue(ref: HTMLInputElement) {
        ref.value = '';
        setPreview(null);
      },
      setValue(_: HTMLInputElement, value: string) {
        setPreview(value);
      }
    })
  }, [fieldName, registerField]);

  return (
    <Container borderColor={borderColor} background={background} style={styleContainer}>

      {preview && <img src={preview} alt="Preview" width="100" />}
      <input
        type="file"
        ref={inputRef}
        onChange={handlePreview}
        {...rest}
      />
    </Container>
  );
};

export default InputFile;