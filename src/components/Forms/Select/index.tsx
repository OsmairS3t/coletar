import React from 'react';

import { Container, InputText, Placeholder, Icon, Label } from './styles';

interface Props {
  label: string;
  placeholder: string;
  onPress: ()=>void;
}

export function Select({ label, placeholder, onPress }: Props) {
  return (
    <Container>
      { !!label && <Label>{label}:</Label> }
      <InputText onPress={onPress}>
        <Placeholder>{placeholder}</Placeholder>
        <Icon name='chevron-down' size={30} />
      </InputText>
    </Container>
  )
}