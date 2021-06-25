import React, { Component } from 'react';
import { connect } from 'react-redux';

import { Loading } from '../../components';

import { AppState } from '../../store';
import { getCountry } from '../../store/countries/actions';
import { CountryState } from '../../store/countries/types';

import {
    Container,
    Logo,
    PageTitle,
    Content,
    Paragraph,
    Domain
} from './styles';

interface AppProps {
    country: CountryState;
    getCountry: (country: string) => void;
}

class CountryPage extends Component<AppProps> {
    componentDidMount = () => {
        this.props.getCountry('Brazil');
    };

    render() {
        if (this.props.country.loading) return <Loading />;

        return (
            <Container>
                <Logo src={require('../../assets/images/logo.svg').default} />

                <PageTitle>{this.props.country.country?.name}</PageTitle>

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
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = (state: AppState) => ({
    country: state.country
});

export default connect(mapStateToProps, { getCountry })(CountryPage);
