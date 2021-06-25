import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ApolloProvider } from '@apollo/client';

import client from './services/api';

import configureStore from './store';

import GlobalStyle from './styles';

import Home from './pages/home';

const store = configureStore();

ReactDOM.render(
    <ApolloProvider client={client}>
        <Provider store={store}>
            <React.StrictMode>
                <GlobalStyle />
                <Home />
            </React.StrictMode>
        </Provider>
    </ApolloProvider>,
    document.getElementById('root')
);
