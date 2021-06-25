import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

import {
    CountryState,
    CountryActionTypes,
    COUNTRY_LOADING,
    COUNTRY_COMPLETE,
    Country
} from './types';

export function fetchLoading() {
    return {
        type: COUNTRY_LOADING
    };
}

export function fetchComplete(payload: Country[]) {
    return {
        type: COUNTRY_COMPLETE,
        payload
    };
}

export const setLoadingCountries: ActionCreator<
    ThunkAction<Promise<any>, CountryState, null, CountryActionTypes>
> = () => {
    return async (dispatch: Dispatch) => {
        dispatch(fetchLoading());
    };
};

export const setCountries: ActionCreator<
    ThunkAction<Promise<any>, CountryState, null, CountryActionTypes>
> = (countries: Country[]) => {
    return async (dispatch: Dispatch) => {
        dispatch(fetchComplete(countries));
    };
};
