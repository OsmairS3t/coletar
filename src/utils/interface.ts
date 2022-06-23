type Address = {
    zipcode: string;
    street: string;
    district: string;
    city: string;
    state: string;
}

export interface IPlace {
    id: string;
    name: string;
    address: Address;
    longitude: string;
    latitude: string;
    londelta: string;
    latdelta: string;
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