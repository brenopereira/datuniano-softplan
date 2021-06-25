import React from 'react';
import { connect } from 'react-redux';

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

interface AppProps {
    country: CountryState;
    countrySearchName: (country: string) => void;
    setCountries: () => void;
}

class Home extends React.Component<AppProps> {
    componentDidMount = () => {
        this.props.setCountries();
    };

    handleChangeText = (e: React.FormEvent<HTMLInputElement>) => {
        this.props.countrySearchName(e.currentTarget.value);
    };

    render() {
        if (this.props.country.loading) return <Loading />;

        return (
            <Container>
                <Logo src={require('../../assets/images/logo.svg').default} />

                <PageTitle>Listagem de Países</PageTitle>

                <SearchContainer>
                    <SearchInput
                        onChange={this.handleChangeText}
                        placeholder='Digite o país que você deseja buscar.'
                    />
                </SearchContainer>

                <Content>
                    {this.props.country.countries.map((row: Country, index) => (
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
}

const mapStateToProps = (state: AppState) => ({
    country: state.country
});

export default connect(mapStateToProps, { countrySearchName, setCountries })(
    Home
);
