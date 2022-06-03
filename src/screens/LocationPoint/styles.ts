import MapView from 'react-native-maps';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled.View`
  height: 100%;
  margin-top: ${getStatusBarHeight() + RFValue(5)}px;
  margin: 25px 16px;
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

export const Mapa = styled(MapView)`
  margin-top: 15px;
  width: 100%;
  height: 60%;
`;

export const ListSelect = styled.View`
  margin-top: ${RFPercentage(28)}px;
  margin-left: 17px;
  width: ${RFValue(317)}px;
  height: 500px;
  background-color: ${({ theme }) => theme.colors.green_dark};
  padding: 10px;
`;

export const ItemSelect = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  margin-top: 10px;
`;

export const ButtonSelect = styled(TouchableOpacity)`
  background-color: ${({ theme }) => theme.colors.green};
  width: 275px;
  padding: 10px;
  position: relative;
  margin-top: -80px;
  align-self: center;
  border-radius: 10px;
  align-items: center;
`;

export const TitleButtonSelect = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 20px;
`;

export const PointDescription = styled.View`
  width: 100%;
  height: ${RFPercentage(8)}px;
  justify-content: center;
  align-items: center;
`;