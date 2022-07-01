import React, { useEffect, useState } from "react";
import { useNavigation, useRoute } from '@react-navigation/native'
import MapView, { Marker } from "react-native-maps";
import * as Location from 'expo-location';

import { IPlace } from "../../utils/interface";

import {
    Container,
    GroupTitle,
    Title,
    Back,
    Icon,
    Mapa,
} from './styles';
import { Header } from "../../components/Header";

export function PointOnMap() {
    const navigation = useNavigation();
    const route = useRoute();
    const origin = route.params as IPlace;
    //const [origin, setOrigin] = useState<IPlace>(null);
 /* 
    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                console.log('Permission to access location was denied');
                return;
            }
            if (localPoint) {
                setOrigin(localPoint)
            }

        })();
    }, []);
 */
    function handleDetailPoint(localPoint: IPlace) {
        navigation.navigate('detailpoint', localPoint);
    }

    return (
        <Container>
            <Header onBack={()=>{navigation.goBack()}} />
            <GroupTitle>
                <Title>Mapa do local:</Title>
                <Back onPress={()=>{navigation.goBack()}}>
                    <Icon name='corner-up-left' size={20} />
                </Back>
            </GroupTitle>

            <Mapa
                initialRegion={origin}
                showsUserLocation={true}
                loadingEnabled={true}
            >
                <Marker
                    coordinate={{
                        latitude: origin.coordinate.latitude,
                        longitude: origin.coordinate.longitude
                    }}
                    title={origin.name}
                    description={origin.description}
                    onCalloutPress={() => handleDetailPoint(origin)}
                />
            </Mapa>

        </Container>
    )
}