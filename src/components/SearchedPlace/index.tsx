import React from 'react';

import { 
    Container,
    PlaceData,
    PlaceName,
    PlaceAddress,
    PlaceMore,
    Icon,
 } from './styles';

 interface Address {
    zipcode: string,
    street: string;
    district: string;
    city: string;
    state: string;
 }

 interface PropsType {
    name: string;
    address: Address;
 }

 interface Props {
    data: PropsType;
    onPress: ()=>void;
 }

export function SearchedPlace({data, onPress}: Props) {
    
    return (
        <Container>
            <PlaceData>
                <PlaceName>{data.name}</PlaceName>
                <PlaceAddress>{data.address.street} - {data.address.district} - {data.address.city} / {data.address.state} - {data.address.zipcode}</PlaceAddress>
            </PlaceData>
            <PlaceMore onPress={onPress}>
                <Icon name="plus-square" size={30} />
            </PlaceMore>
        </Container>
    )
}
