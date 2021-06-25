import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Container, Logo, PageTitle, Content, Paragraph } from './styles';

interface AppProps {}

class Error404 extends Component<AppProps> {
    render() {
        return (
            <Container>
                <Link to='/'>
                    <Logo
                        src={require('../../assets/images/logo.svg').default}
                    />
                </Link>

                <PageTitle>Página não encontrada</PageTitle>

                <Content>
                    <Paragraph>
                        A página que você requisitou não foi encontrada.
                    </Paragraph>
                </Content>
            </Container>
        );
    }
}

export default Error404;
