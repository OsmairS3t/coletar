import { ICoordinateMarker } from "./interface"

export const places = [{
    id: 'afastatodomaldemim',
    name: 'Araujo House',
    description: 'House of Osmair, Wanessa and Raphael',
    address: {
        zipcode: '75135030',
        street: 'Rua Fildecina M. Santos Qd39 Lt26',
        district: 'Calixtópolis II Etapa',
        city: 'Anápolis',
        state: 'GO',
    },
    coordinate: {
        latitude: -16.3923183,
        longitude: -48.9817117
    },
    londelta: '',
    latdelta: '',
},
{
    id: 'todomallongedemim',
    name: 'Supermercado',
    description: 'Perola Supermercado',
    coordinate: {
        latitude: -16.39677623530074,
        longitude: -48.979459914433185
    },
    address: {
        zipcode: '75135000',
        street: 'Rua Luziânia qd20 Lt20',
        district: 'Parque Calixtopolis',
        city: 'Anápolis',
        state: 'GO',
    },
    londelta: '',
    latdelta: '',
},
{
    id: 'nenhummalpertodemim',
    name: 'Maria House',
    description: 'House Mother of Osmair',
    coordinate: {
        latitude: -16.394625430885622,
        longitude: -48.98005219135306
    },
    address: {
        zipcode: '75100970',
        street: 'Rua Anápolis Qd38 Lt12',
        district: 'Parque Calixtopolis',
        city: 'Anápolis',
        state: 'GO',
    },
    londelta: '',
    latdelta: '',
}
]

export const arrCoordMarker: ICoordinateMarker[] = [
    {
        id: 1,
        coordinate: {
            latitude: -16.3923183,
            longitude: -48.9817117
        },
        title: 'Araujo House',
        description: 'House of Osmair, Wanessa and Raphael'
    },
    {
        id: 2,
        title: 'Supermercado',
        description: 'Perola Supermercado',
        coordinate: {
            latitude: -16.39677623530074,
            longitude: -48.979459914433185
        },
    },
    {
        id: 3,
        coordinate: {
            latitude: -16.394625430885622,
            longitude: -48.98005219135306
        },
        title: 'Maria House',
        description: 'House Mother of Osmair'
    },
    {
        id: 4,
        coordinate: {
            latitude: -16.39653369154222,
            longitude: -48.98079801711758
        },
        title: 'Pamonharia',
        description: 'House of pamonhas sell.'
    },
]

export const objPlace = {
    id: 'afastatodomaldemim',
    name: 'Mercadinho do Seu Zé',
    address: {
        zipcode: '75135033',
        street: 'Av. Brasil n.125',
        district: 'Centro',
        city: 'Anápolis',
        state: 'GO'
    },
    longitude: '',
    latitude: '',
    londelta: '',
    latdelta: '',
}

