import {
    ApolloClient,
    InMemoryCache,
    ReactiveVar,
    makeVar
} from '@apollo/client';
import { Country } from '../store/countries/types';

export default new ApolloClient({
    uri: 'http://testefront.dev.softplan.com.br',
    cache: new InMemoryCache({
        typePolicies: {
            Query: {
                fields: {
                    Countries: {
                        read() {
                            return countryVar();
                        }
                    }
                }
            }
        }
    })
});

const countryInitialValue: Country[] = [];

export const countryVar: ReactiveVar<Country[]> = makeVar<Country[]>(
    countryInitialValue
);
