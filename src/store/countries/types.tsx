export interface Country {
    capital: string;
    name: string;
    flag: {
        emoji: string;
    };
}

export interface CountryState {
    loading: boolean;
    search: Country[];
    countries: Country[];
}

export const COUNTRY_COMPLETE = '@COUNTRY/COUNTRY_COMPLETE';
export const COUNTRY_LOADING = '@COUNTRY/COUNTRY_LOADING';
export const COUNTRY_SEARCH = '@COUNTRY/COUNTRY_SEARCH';

interface CountryCompleteAction {
    type: typeof COUNTRY_COMPLETE;
    payload: Country[];
}

interface CountryLoadingAction {
    type: typeof COUNTRY_LOADING;
}

interface CountrySearchAction {
    type: typeof COUNTRY_SEARCH;
    payload: string;
}

export type CountryActionTypes =
    | CountryCompleteAction
    | CountryLoadingAction
    | CountrySearchAction;
