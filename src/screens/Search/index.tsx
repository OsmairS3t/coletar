import React,{useState} from 'react';
import { useNavigation } from '@react-navigation/native';
import { Header } from '../../components/Header';

import { useForm } from 'react-hook-form';
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

interface SearchProps {
  search: string;
}

export function Search() {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState<string>('');
  const { handleSubmit, control } = useForm<SearchProps>();

  function handleBack() {
    navigation.navigate('home')
  }
  return (
    <Container>
      <Header onBack={handleBack} />

      <GroupForm>
        <Title>Busca Pontos de Coleta</Title>
 
        <InputSearch
          control={control}
          placeholder="Pesquisar"
          icon='search'
          keyboardType='numeric'
          
        />
 
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
