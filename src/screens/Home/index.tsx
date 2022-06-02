import React from 'react';
import { Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ButtonForm } from '../../components/ButtonForm';

import {
  Container,
  Title,
  Logo,
  Description,
  Footer,
  FooterImg
} from './styles';

const logoImg = '../../assets/logo.png';
const footerImg = '../../assets/footerImg.png';

export function Home() {
  const navigation = useNavigation();

  function handleSearchPage() {
    navigation.navigate('search');
  }

  return (
    <Container>
      <Title>Coletar</Title>
      <Logo source={require(logoImg)} />
      <Description>AQUI VOCÊ ENCONTRA O LOCAL IDEAL PARA  DEPOSITAR SEUS RESÍDUOS</Description>
      <Footer>
        <ButtonForm 
          title='Localizar pontos de Coleta'
          onPress={handleSearchPage}
        />
        <FooterImg source={require(footerImg)} />
      </Footer>
    </Container>
  )
}