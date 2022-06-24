import MapView from 'react-native-maps';
import { getStatusBarHeight, getBottomSpace } from 'react-native-iphone-x-helper';
import { RFValue, RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  height: 81%;
  margin-top: ${getStatusBarHeight() + RFValue(5)}px;
  margin: 0px 16px;
`;

export const Title = styled.Text`
  font-size: ${RFValue(16)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`;

export const Form = styled.View`
  flex: 0.95;  
  justify-content: space-between;
`;

export const GroupForm = styled.View``;

export const Mapa = styled(MapView)`
  margin-top: 15px;
  width: 100%;
  height: 580px;
`;

export const PointDescription = styled.View`
  width: 100%;
  height: ${RFPercentage(8)}px;
  justify-content: center;
  align-items: center;
`;