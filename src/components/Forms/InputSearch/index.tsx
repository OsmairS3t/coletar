import React from 'react';
import { TextInput, TextInputProps } from 'react-native';
import { Controller, Control } from 'react-hook-form';

import { Input } from '../../Forms/Input';

import {
  Container,
  Icon
} from './styles';

interface SearchProps {
  search: string;
}

interface Props extends TextInputProps {
  icon: string;
  placeholder: string;
  control: Control<SearchProps>;
}

export function InputSearch({ icon, placeholder, control, ...rest }: Props) {

  return (
    <Container>
      <Controller
        name="search"
        control={control}
        render={({ field: { onChange, value } }) => (
          <Input
            placeholder={placeholder}
            onChangeText={onChange}
            value={value as string}
            {...rest}
          />
        )}
      />
      <Icon name={icon} size={25} />
    </Container>
  )
}
