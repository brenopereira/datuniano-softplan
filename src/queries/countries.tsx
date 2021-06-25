import { gql } from '@apollo/client';

export const COUNTRIES_QUERY = gql(`
    query GetCountries {
        Country {
            capital
            name

            flag {
                emoji
            }
        }
    }
`);

export const COUNTRY_FILTER = (country: string) =>
    gql(`
    query GetCountries {
        Country(name: "${country}") {
            capital
            name

            flag {
                emoji
            }

            topLevelDomains {
                name
            }
        }
    }
`);
