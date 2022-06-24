import React from 'react';
import { useNavigation, useRoute } from '@react-navigation/native'
import { IPlace } from '../../utils/interface';

import {
    Container,
    GroupTitle,
    Title,
    Back,
    TextButton,
    Icon,
    GroupLocal,
    LocalName,
    LocalAddress,
    LocalHour,
    Bold
} from './styles';
import { Header } from '../../components/Header';

export function DetailPoint() {
    const navigation = useNavigation();
    const route = useRoute();
    const localPoint = route.params as IPlace;

    function handleBack() {
        navigation.goBack();
    }

    return (
        <Container>
            <Header onBack={handleBack} />
            <GroupTitle>
                <Title>Detalhe do local:</Title>
                <Back onPress={handleBack}>
                    <Icon name='corner-up-left' size={20} />
                </Back>
            </GroupTitle>

            <GroupLocal>
                <LocalName>{localPoint.name}</LocalName>
                <LocalName>{localPoint.description}</LocalName>
                <LocalAddress>
                    {localPoint.address.street} - {localPoint.address.district} - {localPoint.address.city} - {localPoint.address.state}
                </LocalAddress>
                <LocalHour><Bold>Funcionamento:</Bold> Seg-Sex, das 08:00 as 18:00</LocalHour>
            </GroupLocal>
        </Container>
    )
}