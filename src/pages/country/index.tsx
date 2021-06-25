import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { Loading } from '../../components';

import { AppState } from '../../store';
import { getCountry, updateCountryInfo } from '../../store/countries/actions';
import { CountryState } from '../../store/countries/types';

import {
    Container,
    Logo,
    PageTitle,
    Content,
    Paragraph,
    BackTo
} from './styles';

interface AppProps {
    country: CountryState;
    getCountry: (country: string) => void;
    match: any;
}

class CountryPage extends Component<AppProps> {
    componentDidMount = () => {
        this.props.getCountry(this.props.match.params.country);
    };

    handleUpdateCountry = () => {
        let test = {
            Country: {
                _id: '3',
                __typename: 'Country',
                capital: 'Teste',
                name: 'Afghanistan',
                population: 27657145,
                area: 652230,
                flag: {
                    __typename: 'Flag',
                    emoji: '🇦🇫'
                },
                topLevelDomains: {
                    __typename: 'TopLevelDomain',
                    name: '.af'
                }
            }
        };

        updateCountryInfo(this.props.match.params.country, test);
    };

    render() {
        if (this.props.country.loading) return <Loading />;

        return (
            <Container>
                <button onClick={this.handleUpdateCountry}>
                    Atualizar data
                </button>
                <Link to='/'>
                    <Logo
                        src={require('../../assets/images/logo.svg').default}
                    />
                </Link>

                <PageTitle>
                    {this.props.country.country?.name}{' '}
                    {this.props.country.country?.flag.emoji}
                </PageTitle>

                <Content>
                    <Paragraph>
                        {this.props.country.country?.name} tem a capital{' '}
                        {this.props.country.country?.capital} e essa é a sua
                        bandeira {this.props.country.country?.flag.emoji},
                        possuí também uma população no total de{' '}
                        {this.props.country.country?.population.toLocaleString(
                            'pt-BR'
                        )}{' '}
                        habitantes, e a sua área total é de{' '}
                        {this.props.country.country?.area.toLocaleString(
                            'pt-BR'
                        )}
                        m2. Na internet, o seu domínio possuí a extesão{' '}
                        {this.props.country.country?.topLevelDomains[0].name}
                    </Paragraph>

                    <BackTo to='/'>Voltar para a lista de paises</BackTo>
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = (state: AppState) => ({
    country: state.country
});

export default connect(mapStateToProps, { getCountry })(CountryPage);
