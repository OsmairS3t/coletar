import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
    flex-direction: row;
    padding: 10px;
    border-bottom-width: 1px;
    border-style: dashed;
    border-color: silver; 
`;

export const PlaceData = styled.View`
    flex: 1;
`;

export const PlaceName = styled.Text`
    font-size: ${RFValue(14)}px;
`;

export const PlaceAddress = styled.Text`
    font-size: ${RFValue(10)}px;
`;

export const PlaceMore = styled.TouchableOpacity``;

export const Icon = styled<any>(Feather)``;

