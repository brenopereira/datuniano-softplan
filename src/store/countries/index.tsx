import {
    COUNTRY_LOADING,
    COUNTRY_COMPLETE,
    CountryActionTypes,
    CountryState
} from './types';

const initialState: CountryState = {
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
                ...state,
                countries: action.payload
            };
        }

        default:
            return {
                ...state
            };
    }
}
