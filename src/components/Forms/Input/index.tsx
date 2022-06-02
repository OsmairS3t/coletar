import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, Label } from './styles';

interface Props extends TextInputProps {
  label: string;
}

export function Input({ label, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Label>{label}</Label>
    </Container>
  )
}