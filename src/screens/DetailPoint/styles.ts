import { Feather } from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View``;

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

export const GroupLocal = styled.View`
    padding: 5px 10px;
`;

export const LocalName = styled.Text`
    font-family: ${({theme}) => theme.fonts.bold};
    color: ${({theme}) => theme.colors.green_dark};
    font-size: ${RFValue(14)}px;
`;

export const Bold = styled.Text`
    font-family: ${({theme}) => theme.fonts.bold};
    color: ${({theme}) => theme.colors.green_dark};
    font-size: ${RFValue(12)}px;
`;

export const LocalAddress = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme}) => theme.colors.silver_dark};
    font-size: ${RFValue(12)}px;
`;

export const LocalHour = styled.Text`
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme}) => theme.colors.silver_dark};
    font-size: ${RFValue(12)}px;
`;

export const Back = styled.TouchableOpacity``;

export const Icon = styled<any>(Feather)``;

export const TextButton = styled.Text`
    color: ${({ theme }) => theme.colors.green_dark};
`;
