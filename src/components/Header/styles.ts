import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  margin: 20px 0px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const ButtonBack = styled.TouchableOpacity``;

export const IconBack = styled(Feather)`
  color: ${({ theme }) => theme.colors.green_dark};
  margin-right: 10px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: ${RFValue(20)}px;
`;