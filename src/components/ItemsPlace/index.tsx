import React from 'react';

import {
    Container,
    Image,
    Label
} from './styles';

interface Props {
    id: string;
    labelName: string;
    urlImage?: string;
}

export function ItemPlace({ id, labelName }: Props) {
    return (
        <Container key={id}>
            <Image />
            <Label>{labelName}</Label>
        </Container>
    )
}