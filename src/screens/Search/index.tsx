import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Header } from '../../components/Header';

import { Select } from '../../components/Forms/Select';
import { InputSearch } from '../../components/Forms/InputSearch';

import {
  Container,
  GroupForm,
  Title
} from './styles'

export function Search() {
  const navigation = useNavigation();

  function handleBack() {
    navigation.navigate('home')
  }
  return (
    <Container>
      <Header onBack={handleBack} />
      <GroupForm>
          <Title>Busca Pontos de Coleta</Title>
          
          <Select
            label='Tipos de pontos de coleta'
            placeholder='Coleta seletiva'
            onPress={()=>{}}
          />

          <InputSearch 
            placeholder="Pesquisar"
          />
       </GroupForm>   
    </Container>
  )
}