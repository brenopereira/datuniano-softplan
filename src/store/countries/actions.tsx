import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';

import client from '../../services/api';

import { COUNTRIES_QUERY, COUNTRY_FILTER } from '../../queries/countries';

import {
    CountryState,
    CountryActionTypes,
    COUNTRY_LOADING,
    COUNTRY_COMPLETE,
    COUNTRY_SEARCH,
    COUNTRY_SINGLE_COMPLETE,
    Country
} from './types';

function fetchLoading() {
    return {
        type: COUNTRY_LOADING
    };
}

function fetchComplete(payload: Country[]) {
    return {
        type: COUNTRY_COMPLETE,
        payload
    };
}

function searchCountry(payload: string) {
    return {
        type: COUNTRY_SEARCH,
        payload
    };
}

function fetchSingleComplete(payload: Country) {
    return {
        type: COUNTRY_SINGLE_COMPLETE,
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
        client
            .query({
                query: COUNTRIES_QUERY
            })
            .then(result => {
                dispatch(fetchComplete(result.data.Country));
            });
    };
};

export const getCountry: ActionCreator<
    ThunkAction<Promise<any>, CountryState, null, CountryActionTypes>
> = (country: string) => {
    return async (dispatch: Dispatch) => {
        client
            .query({
                query: COUNTRY_FILTER(country)
            })
            .then(result => {
                dispatch(fetchSingleComplete(result.data.Country[0]));
            });
    };
};

export const countrySearchName: ActionCreator<
    ThunkAction<Promise<any>, CountryState, null, CountryActionTypes>
> = (country: string) => {
    return async (dispatch: Dispatch) => {
        dispatch(searchCountry(country));
    };
};
