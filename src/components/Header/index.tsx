import React from 'react';

import {
  Container,
  ButtonBack,
  IconBack,
  TitleImg,
  ImgLogo
} from './styles';

interface Props {
  onBack: () => void;
}

export function Header({onBack}: Props) {
  const logotipo = '../../assets/logotipoColetar.png';

  return (
    <Container>
        <TitleImg>
          <ImgLogo source={require(logotipo)} />
        </TitleImg>
        <ButtonBack  onPress={onBack}>
          <IconBack name="x" size={25} />
        </ButtonBack>
    </Container>
  )
}