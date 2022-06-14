import { Feather } from '@expo/vector-icons';
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

export const GroupForm = styled.View``;

export const SearchedPlace = styled.View`
  height: 100%;
  background-color: ${({ theme }) => theme.colors.silver_light};
`;

export const TitleSP = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;
  
export const SubTitleSP = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const ObjSearched = styled.View`
  flex-direction: row;
  margin: 5px 0px;
  padding: 10px 0px;
  border-bottom-width: 1px;
  border-style: dashed;
  border-color: silver; 
`;

export const ObjSearchedData = styled.View`
  flex: 1;
`;

export const ObjSName = styled.Text`
  font-size: ${RFValue(14)}px;
`;

export const ObjSAddress = styled.Text`
  font-size: ${RFValue(10)}px;
`;

export const ObjSMore = styled.TouchableOpacity`
  
`;

export const ObjSMoreIcon = styled<any>(Feather)`

`;
