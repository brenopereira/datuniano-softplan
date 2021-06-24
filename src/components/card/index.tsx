import React from 'react';

import { Container } from './styles';

export interface CardInterface {
    country: string;
    capital: string;
    flag: string;
}

export function Card({ country, capital, flag }: CardInterface) {
    return <Container></Container>;
}
