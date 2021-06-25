import { ApolloClient, InMemoryCache } from '@apollo/client';

export default new ApolloClient({
    uri: 'http://testefront.dev.softplan.com.br',
    cache: new InMemoryCache()
});
