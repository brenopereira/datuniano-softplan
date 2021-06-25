import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/client';

import client from './services/api';

import configureStore from './store';

import GlobalStyle from './styles';

// import Home from './pages/home';
import CountryPage from './pages/country';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <ApolloProvider client={client}>
            <GlobalStyle />
            <CountryPage />
        </ApolloProvider>
    </Provider>,
    document.getElementById('root')
);
