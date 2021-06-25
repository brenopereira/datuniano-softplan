import { gql } from '@apollo/client';
import { Country } from '../store/countries/types';

export const COUNTRIES_QUERY = gql(`
        query GetCountries {
            Country {
                _id
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
            Country(_id: "${country}") {
                _id
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

export const UPDATE_COUNTRY = (id: string) =>
    gql(`
        query updateCountry {
            Country(_id: "${id}") {
                _id
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
