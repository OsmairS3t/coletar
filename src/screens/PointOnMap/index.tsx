import React from "react";
import { useNavigation, useRoute } from '@react-navigation/native'
import MapView, { Marker } from "react-native-maps";

import { IPlace } from "../../utils/interface";

import {
    Container
} from './styles';

export function PointOnMap() {
    const latdelta = 0.00922;
    const londelta = 0.00421;
    const navigation = useNavigation();
    const route = useRoute();
    const localPoint = route.params as IPlace;
    console.log(localPoint)

    function handleDetailPoint(localPoint: IPlace) {
        navigation.navigate('detailpoint', localPoint);
      }
    
    return (
        <Container>
            <MapView
                initialRegion={{
                    latitude: localPoint.coordinate.latitude,
                    longitude: localPoint.coordinate.longitude,
                    latitudeDelta: latdelta,
                    longitudeDelta: londelta,
                }}
            >
                <Marker
                    coordinate={localPoint.coordinate}
                    title={localPoint.name}
                    description={localPoint.description}
                    onCalloutPress={() => handleDetailPoint(localPoint)}
                />
            </MapView>
        </Container>
    )
}