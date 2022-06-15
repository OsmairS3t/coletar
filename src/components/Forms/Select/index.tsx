import React from 'react';

import { Container, InputText, Placeholder, Icon, Label } from './styles';

interface Props {
  label?: string;
  icon?: string;
  placeholder: string;
  onPress: ()=>void;
}

export function Select({ label, icon, placeholder, onPress }: Props) {
  return (
    <Container>
      { !!label && <Label>{label}:</Label> }
     
      <InputText onPress={onPress}>
        <Placeholder>{placeholder}</Placeholder>
        {!!icon && <Icon name={icon} size={30} />}
      </InputText>
      
    </Container>
  )
}