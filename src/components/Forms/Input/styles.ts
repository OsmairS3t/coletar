import styled from 'styled-components/native';
import { TextInput } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(TextInput)`
  width: 100%;
  padding: 16px;
  font-size: ${RFValue(14)}px;
  background-color: ${({ theme }) => theme.colors.silver_light};
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.green_dark};
  border-radius: 15px;
`;

export const Label = styled.Text`
  color: ${({ theme }) => theme.colors.silver};
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;