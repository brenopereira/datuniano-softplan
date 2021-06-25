import {
    COUNTRY_LOADING,
    COUNTRY_COMPLETE,
    COUNTRY_SEARCH,
    COUNTRY_SINGLE_COMPLETE,
    CountryActionTypes,
    CountryState
} from './types';

const initialState: CountryState = {
    loading: true,
    search: [],
    countries: []
};

export function country(
    state = initialState,
    action: CountryActionTypes
): CountryState {
    switch (action.type) {
        case COUNTRY_LOADING: {
            return {
                ...state
            };
        }

        case COUNTRY_COMPLETE: {
            return {
                loading: false,
                search: action.payload,
                countries: action.payload
            };
        }

        case COUNTRY_SEARCH: {
            let data = [];

            data = state.countries;

            if (action.payload.length) {
                data = state.search.filter(
                    item =>
                        item.capital
                            .toLowerCase()
                            .indexOf(action.payload.toLowerCase()) > -1
                );
            } else {
                data = state.search;
            }

            return {
                ...state,
                countries: data
            };
        }

        case COUNTRY_SINGLE_COMPLETE: {
            return {
                ...state,
                loading: false,
                country: action.payload
            };
        }

        default:
            return {
                ...state
            };
    }
}
