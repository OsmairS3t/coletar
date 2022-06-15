import React,{useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { Header } from '../../components/Header';

import { Select } from '../../components/Forms/Select';
import { InputSearch } from '../../components/Forms/InputSearch';
import { SearchedPlace } from '../../components/SearchedPlace';
import { objPlace } from '../../utils/data';

import {
  Container,
  GroupForm,
  Title,
  SearchedContainer,
  TitleSC,
  SubTitleSC,
} from './styles'

export function Search() {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState<string>("Teste");

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
        
{/*         <InputSearch
          valueSearch={searchText}
          setValueSearch={setSearchText}
          placeholder="Pesquisar"
          icon='search'
        />
 */}
      </GroupForm>

      <SearchedContainer>
        <TitleSC>Locais encontrados</TitleSC>
        <SubTitleSC>Tipo de pesquisa: nenhum</SubTitleSC>
        
        <SearchedPlace 
          data={objPlace}
        />
      </SearchedContainer>
    </Container>
  )
}
