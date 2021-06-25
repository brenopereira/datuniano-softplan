import React from 'react';

import {
    Container,
    MainCountryContainer,
    Country,
    Capital,
    Flag
} from './styles';

export interface CardInterface {
    id: string;
    country: string;
    capital: string;
    flag: string;
}

export function Card({ id, country, capital, flag }: CardInterface) {
    return (
        <Container href={'/country/' + id}>
            <MainCountryContainer>
                <Country>{country}</Country>
                <Capital>{capital}</Capital>
            </MainCountryContainer>
            <Flag>{flag}</Flag>
        </Container>
    );
}
