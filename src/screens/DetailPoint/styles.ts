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

export const TitlePrimary = styled.Text`
    font-family: ${({theme}) => theme.fonts.bold};
    color: ${({theme}) => theme.colors.green_dark};
    font-size: ${RFValue(12)}px;
`;

export const TitleSecondary = styled.Text`
    font-family: ${({theme}) => theme.fonts.bold};
    color: ${({theme}) => theme.colors.silver_dark};
    font-size: ${RFValue(12)}px;
`;

export const Back = styled.TouchableOpacity``;

export const Icon = styled<any>(Feather)``;

export const GroupItem = styled.View`
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
`;

export const ButtonMap = styled.TouchableOpacity``;

export const NotFound = styled.Text`
    width: 100%;
    padding: 0px 10px;
    font-family: ${({theme}) => theme.fonts.regular};
    color: ${({theme}) => theme.colors.green_dark};
    font-size: ${RFValue(12)}px;
`;

