import React from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { gql } from '@apollo/client';

import client from '../../services/api';

import { AppState } from '../../store';
import { Country, CountryState } from '../../store/countries/types';

import {
    setLoadingCountries,
    setCountries
} from '../../store/countries/actions';

import { Card } from '../../components';

import {
    Container,
    Logo,
    PageTitle,
    Content,
    SearchContainer,
    SearchInput
} from './styles';
import Loading from '../../components/loading';

function Home() {
    const country: CountryState = useSelector(
        (state: AppState) => state.country,
        shallowEqual
    );

    const dispatch: Dispatch<any> = useDispatch();

    React.useEffect(() => {
        dispatch(setLoadingCountries());

        client
            .query({
                query: gql`
                    query GetCountries {
                        Country {
                            capital
                            name

                            flag {
                                emoji
                            }
                        }
                    }
                `
            })
            .then(result => {});
    });

    // dispatch(setCountries(result.data.Country));

    // if (country.loading) return <Loading />;

    return (
        <Container>
            <Logo src={require('../../assets/images/logo.svg').default} />

            <PageTitle>Listagem de Países</PageTitle>

            <SearchContainer>
                <SearchInput placeholder='Digite o país que você deseja buscar.' />
            </SearchContainer>

            <Content>
                {country.countries.map((row: Country, index) => (
                    <Card
                        key={index}
                        country={row.name}
                        capital={row.capital}
                        flag={row.flag.emoji}
                    />
                ))}
            </Content>
        </Container>
    );
}

export default Home;
