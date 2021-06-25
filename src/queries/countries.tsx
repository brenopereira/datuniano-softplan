import { gql } from '@apollo/client';

export const COUNTRIES_QUERY = gql(`
        query GetCountries {
            Country {
                capital
                name
                population
                area

                flag {
                    emoji
                }
                
                topLevelDomains {
                    name
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
                population
                area

                flag {
                    emoji
                }
                
                topLevelDomains {
                    name
                }
            }
        }
`);
