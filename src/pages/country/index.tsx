import React, { Component } from 'react';
import { connect } from 'react-redux';

import { AppState } from '../../store';
import { getCountry } from '../../store/countries/actions';

import { Container, Logo, PageTitle, Content } from './styles';

interface AppProps {
    getCountry: (country: string) => void;
}

class CountryPage extends Component<AppProps> {
    componentDidMount = () => {
        this.props.getCountry('Brazil');
    };

    render() {
        return (
            <Container>
                <Logo src={require('../../assets/images/logo.svg').default} />

                <PageTitle>Listagem de Países</PageTitle>

                <Content>asdsa</Content>
            </Container>
        );
    }
}

const mapStateToProps = (state: AppState) => ({
    country: state.country
});

export default connect(mapStateToProps, { getCountry })(CountryPage);
