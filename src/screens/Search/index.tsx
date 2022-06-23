import React, { useEffect, useState } from 'react';
import {TouchableWithoutFeedback, Keyboard, FlatList} from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { Header } from '../../components/Header';

import { SearchedPlace } from '../../components/SearchedPlace';
import { Input } from '../../components/Forms/Input';

import { IPlace } from '../../utils/interface';
import { places } from '../../utils/data';

import {
  Container,
  GroupForm,
  Title,
  SearchedContainer,
  TitleSC,
  PlaceNotFound
} from './styles'

export function Search() {
  const navigation = useNavigation();
  const [searched, setSearched] = useState('');
  const [placeFounded, setPlaceFounded] = useState<IPlace[]>([{
    id: '',
    name: '',
    description: '',
    coordinate: {
      latitude: 0,
      longitude: 0
    },
    address: {
        zipcode: '',
        street: '',
        district: '',
        city: '',
        state: '',
      },
      londelta: '',
      latdelta: '',
  }]);

  function handleBack() {
    navigation.navigate('home')
  }

  function handleDetailPoint(id: string) {
    navigation.navigate('detailpoint');
  }

  useEffect(()=>{
    const objPlace:IPlace[] = places.filter(item => item.address.street.includes(searched))
    setPlaceFounded(objPlace);
  },[searched]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <Container>
      <Header onBack={handleBack} />

      <GroupForm>
        <Title>Busca Locais de Pontos de Coleta:</Title>

        <Input 
          value={searched}
          onChangeText={searched => setSearched(searched)}
          placeholder='Digige o nome da Rua/Av.'
          autoCapitalize='characters'
          autoCorrect={false}
        />

      </GroupForm>
      {
        !SearchedPlace ?
          <PlaceNotFound>Não foram encontrados locais nesta rua digitada.</PlaceNotFound>
        : 
          <SearchedContainer>
          <TitleSC>Locais encontrados:</TitleSC>

            <FlatList
              data={placeFounded}
              renderItem={({item}) => (
                <SearchedPlace
                  data={item}
                  onPress={()=>handleDetailPoint(item.id)}
                />
              )}
            />
        </SearchedContainer>
      }        
    </Container>
    </TouchableWithoutFeedback>
  )
}

