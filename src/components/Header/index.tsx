import React from 'react';
import { Image } from 'react-native';

import {
  Container,
  ButtonBack,
  IconBack,
  ImgLogo,
  Title
} from './styles';

interface Props {
  onBack: () => void;
}


export function Header({onBack}: Props) {
  const logotipo = '../../assets/logotipoColetar.png';

  return (
    <Container>
        <ButtonBack  onPress={onBack}>
          <IconBack name="arrow-left" size={25} />
        </ButtonBack>
        <ImgLogo source={require(logotipo)} />
        <Title>Coletar</Title>
    </Container>
  )
}