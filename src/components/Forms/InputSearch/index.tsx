import React from 'react';
import { TextInputProps } from 'react-native';
import { Input } from '../Input';

import {
  Container,
  Title
} from './styles';

interface Props extends TextInputProps {
  placeholder: string;
}
export function InputSearch({placeholder}:Props) {
  return (
    <Container>
      <Input 
        placeholder={placeholder} 
      />
    </Container>
  )
}