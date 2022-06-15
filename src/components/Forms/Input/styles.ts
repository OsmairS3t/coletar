import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.silver_light};
`;

export const Label = styled.Text`
  color: ${({ theme }) => theme.colors.silver};
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;