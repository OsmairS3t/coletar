import React from 'react';
import { TextInput, TextInputProps } from 'react-native';

import {
  Container,
  Icon
} from './styles';

interface Props extends TextInputProps {
  icon: string;
  placeholder: string;
  valueSearch: string;
  setValueSearch: (valueSearch:string)=>void;
}
export function InputSearch({ placeholder, icon, valueSearch, setValueSearch }:Props) {

  return (
    <Container>
      <TextInput 
        value={valueSearch}
        onChangeText={value=>setValueSearch(value)}
        placeholder={placeholder} 
      />
      <Icon name={icon} size={25} />
    </Container>
  )
}
