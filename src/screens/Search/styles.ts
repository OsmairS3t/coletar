import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  height: 100%;
  margin: 0px 16px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(20)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const Form = styled.View`
  flex: 0.95;  
  justify-content: space-between;
`;

export const GroupForm = styled.View`
  margin-bottom: 10px;
`;

export const SearchedContainer = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.silver_light};
  margin-bottom: 10px;
`;

export const TitleSC = styled.Text`
  padding: 0px 10px;  
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;
  
export const SubTitleSC = styled.Text`
  padding: 0px 10px;
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

