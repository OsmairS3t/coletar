import { TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  margin-top: 10px;
`;

export const Label = styled.Text`
  margin-bottom: 5px;
  color: ${({ theme }) => theme.colors.silver};
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
`;

export const InputText = styled.TouchableOpacity`
  height: 60px;
  padding: 10px;
  background-color: ${({ theme }) => theme.colors.silver_light};
  border-radius: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Placeholder = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.silver_dark};
`;

export const Icon = styled(Feather)`
  width: ${RFValue(30)}px;
`;