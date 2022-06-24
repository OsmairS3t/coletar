type Address = {
    zipcode: string;
    street: string;
    district: string;
    city: string;
    state: string;
}

export interface ICoordinate {
    latitude: number;
    longitude: number;
}

export interface ICoordinateMarker {
    id: number;
    coordinate: ICoordinate;
    title: string;
    description: string;
}

export interface IPlace {
    id: string;
    name: string;
    description: string;
    coordinate: ICoordinate;
    address: Address;
    londelta: string;
    latdelta: string;
}
