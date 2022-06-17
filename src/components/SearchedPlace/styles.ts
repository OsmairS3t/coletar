import styled from 'styled-components/native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
    flex-direction: row;
    justify-content: center;
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.silver_light};
    margin: 5px 0px;
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

export const PlaceMore = styled.TouchableOpacity`
    justify-content: center;
`;

export const Icon = styled<any>(Feather)``;

