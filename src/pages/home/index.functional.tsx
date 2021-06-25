import React from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { Dispatch } from 'redux';
import { useQuery, gql } from '@apollo/client';

import { AppState } from '../../store';
import { Country, CountryState } from '../../store/countries/types';

import { countrySearchName, setCountries } from '../../store/countries/actions';

import { Card, Loading } from '../../components';

import {
    Container,
    Logo,
    PageTitle,
    Content,
    SearchContainer,
    SearchInput
} from './styles';

import { COUNTRIES_QUERY } from '../../queries/countries';

function Home() {
    const [search, setSearch] = React.useState('');

    const country: CountryState = useSelector(
        (state: AppState) => state.country,
        shallowEqual
    );

    const dispatch: Dispatch<any> = useDispatch();

    React.useEffect(() => {
        dispatch(countrySearchName(search));
    }, [search, dispatch]);

    const { loading, data } = useQuery(COUNTRIES_QUERY, {
        fetchPolicy: 'network-only'
    });

    if (data) {
        dispatch(setCountries(data.Country));
    }

    if (loading) return <Loading />;

    const handleChangeText = (e: any) => {
        setSearch(e.target.value);
    };

    return (
        <Container>
            <Logo src={require('../../assets/images/logo.svg').default} />

            <PageTitle>Listagem de Países</PageTitle>

            <SearchContainer>
                <SearchInput
                    onChange={e => handleChangeText(e)}
                    placeholder='Digite o país que você deseja buscar.'
                />
            </SearchContainer>

            <Content>
                {country.countries.map((row: Country, index) => (
                    <Card
                        key={index}
                        id={row._id}
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
