import {
    COUNTRY_LOADING,
    COUNTRY_COMPLETE,
    CountryActionTypes,
    CountryState
} from './types';

const initialState: CountryState = {
    loading: false,
    countries: []
};

export function country(
    state = initialState,
    action: CountryActionTypes
): CountryState {
    switch (action.type) {
        case COUNTRY_LOADING: {
            return {
                ...state,
                loading: true
            };
        }

        case COUNTRY_COMPLETE: {
            return {
                ...state,
                loading: false,
                countries: action.payload
            };
        }

        default:
            return {
                ...state
            };
    }
}
