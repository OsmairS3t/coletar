import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  height: ${RFValue(80)}px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.green_lignt2};
`;

export const ButtonBack = styled.TouchableOpacity``;

export const TitleImg = styled.View`
  width: 90%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const IconBack = styled(Feather)`
  color: ${({ theme }) => theme.colors.green_dark};
  margin-right: 10px;
`;

export const ImgLogo = styled.Image`
  width: 120px;
  height: 30px;
`;