import React from 'react';
import { TextInputProps } from 'react-native';
import { Controller, Control } from 'react-hook-form';

import { Input } from '../Input';

import {
  Container,
  ButtonSearch,
  Icon,
  Error
} from './styles';

interface Props extends TextInputProps {
  name: string;
  control: Control<any>;
  error?: string;
  icon?: string;
  onPress: () => void;
}

export function InputSearch({ icon, name, control, error, onPress, ...rest }: Props) {
  return (
    <Container>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <Input
            onChangeText={onChange}
            value={value as string}
            {...rest}
          />
        )}
        {...rest}
      />
      <ButtonSearch onPress={onPress}>
        <Icon name={icon} size={25} />
      </ButtonSearch>
      {error && <Error>{error}</Error>}
    </Container>
  )
}
