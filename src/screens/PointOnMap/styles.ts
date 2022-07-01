import { Feather } from '@expo/vector-icons';
import MapView from 'react-native-maps';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View``;

export const Mapa = styled(MapView)`
  margin-top: 15px;
  width: 100%;
  height: 580px;
`;

export const GroupTitle = styled.View`
    padding: 0px 10px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Title = styled.Text`
    padding: 5px 5px;
    font-family: ${({theme}) => theme.fonts.bold};
    color: ${({theme}) => theme.colors.silver_dark};
    font-size: ${RFValue(20)}px;
`;

export const Back = styled.TouchableOpacity``;

export const Icon = styled<any>(Feather)``;

