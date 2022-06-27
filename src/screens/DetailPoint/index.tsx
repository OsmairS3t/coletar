import React, { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native'
import { IPlace } from '../../utils/interface';
import { itemsPlace } from '../../utils/data';

import {
    Container,
    GroupTitle,
    Title,
    Back,
    Icon,
    GroupLocal,
    GroupItem,
    NotFound,
    TitlePrimary,
    TitleSecondary
} from './styles';
import { Header } from '../../components/Header';
import { ItemPlace } from '../../components/ItemsPlace';

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
                <TitlePrimary>{localPoint.name}</TitlePrimary>
                <TitlePrimary>{localPoint.description}</TitlePrimary>
                <TitleSecondary>
                    {localPoint.address.street} - {localPoint.address.district} - {localPoint.address.city} - {localPoint.address.state}
                </TitleSecondary>
                <TitleSecondary><TitlePrimary>Funcionamento:</TitlePrimary> {localPoint.funcionamento}</TitleSecondary>
                <TitlePrimary>Tipo(s) de insumo(s):</TitlePrimary>
            </GroupLocal>

            <GroupItem>
                {itemsPlace.map(item => (
                    (localPoint.id === item.id_place) &&
                    <ItemPlace
                        key={item.id}
                        id={item.id}
                        labelName={item.name}
                    />
                ))}
                {/* <NotFound>Este local não possui tipos de itens de coleta cadastrados</NotFound> */}
            </GroupItem>

        </Container>
    )
}