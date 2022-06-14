import React from 'react';
import { TextInputProps } from 'react-native';
import { Input } from '../Input';

import {
  Container,
  Icon
} from './styles';

interface Props extends TextInputProps {
  placeholder: string;
  icon: string;
}
export function InputSearch({placeholder, icon}:Props) {
  return (
    <Container>
      <Input placeholder={placeholder} />
      <Icon name={icon} size={25} />
    </Container>
  )
}