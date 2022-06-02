import React from 'react';

import {
  Container,
  ButtonBack,
  IconBack,
  Title
} from './styles';

interface Props {
  onBack: () => void;
}

export function Header({onBack}: Props) {
  return (
    <Container>
        <ButtonBack  onPress={onBack}>
          <IconBack name="arrow-left" size={25} />
        </ButtonBack>
        <Title>Coletar</Title>
    </Container>
  )
}