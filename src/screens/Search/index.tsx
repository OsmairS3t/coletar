import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Header } from '../../components/Header';

import { Select } from '../../components/Forms/Select';
import { InputSearch } from '../../components/Forms/InputSearch';

import {
  Container,
  GroupForm,
  Title,
  SearchedPlace,
  TitleSP,
  SubTitleSP,
  ObjSearched,
  ObjSearchedData,
  ObjSName,
  ObjSAddress,
  ObjSMore,
  ObjSMoreIcon
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
          placeholder='Tipo de ponto de coleta'
          icon='chevron-down'
          onPress={() => { }}
        />

        <InputSearch
          placeholder="Pesquisar"
          icon='search'
        />
      </GroupForm>
      <SearchedPlace>
        <TitleSP>Locais encontrados</TitleSP>
        <SubTitleSP>Tipo de pesquisa: nenhum</SubTitleSP>
        
        <ObjSearched>
          <ObjSearchedData>
            <ObjSName>Mercado Souza</ObjSName>
            <ObjSAddress>Av. Noroest n.152 - Centro - Anápolis-GO</ObjSAddress>
          </ObjSearchedData>
          <ObjSMore>
            <ObjSMoreIcon name="plus-square" size={30} />
          </ObjSMore>
        </ObjSearched>
        
        <ObjSearched>
          <ObjSearchedData>
            <ObjSName>Mercado Souza</ObjSName>
            <ObjSAddress>Av. Noroest n.152 - Centro - Anápolis-GO</ObjSAddress>
          </ObjSearchedData>
          <ObjSMore>
            <ObjSMoreIcon name="plus-square" size={30} />
          </ObjSMore>
        </ObjSearched>
        
        <ObjSearched>
          <ObjSearchedData>
            <ObjSName>Mercado Souza</ObjSName>
            <ObjSAddress>Av. Noroest n.152 - Centro - Anápolis-GO</ObjSAddress>
          </ObjSearchedData>
          <ObjSMore>
            <ObjSMoreIcon name="plus-square" size={30} />
          </ObjSMore>
        </ObjSearched>
        
      </SearchedPlace>
    </Container>
  )
}
