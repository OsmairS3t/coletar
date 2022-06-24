import React from "react";

import {
    Container,
    Image
} from './styles';

export function Footer() {
    return (
        <Container>
            <Image source={require('../../assets/footerImg.png')} />
        </Container>
    )
}