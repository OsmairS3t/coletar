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
