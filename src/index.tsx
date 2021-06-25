import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/client';

import client from './services/api';

import configureStore from './store';

import GlobalStyle from './styles';

import Routes from './routes';

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
        <ApolloProvider client={client}>
            <GlobalStyle />
            <Routes />
        </ApolloProvider>
    </Provider>,
    document.getElementById('root')
);
