import React from 'react';

import {
    Container,
    MainCountryContainer,
    Country,
    Capital,
    Flag
} from './styles';

export interface CardInterface {
    country: string;
    capital: string;
    flag: string;
}

export function Card({ country, capital, flag }: CardInterface) {
    return (
        <Container href={'/country/' + country}>
            <MainCountryContainer>
                <Country>{country}</Country>
                <Capital>{capital}</Capital>
            </MainCountryContainer>
            <Flag>{flag}</Flag>
        </Container>
    );
}
