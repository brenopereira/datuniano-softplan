interface CountryTopLevel {
    name: string;
}

export interface Country {
    _id: string;
    capital: string;
    name: string;
    population: number;
    area: number;
    flag: {
        emoji: string;
    };
    topLevelDomains: CountryTopLevel[];
}

export interface CountryState {
    loading: boolean;
    search: Country[];
    countries: Country[];
    country?: Country;
}

export const COUNTRY_COMPLETE = '@COUNTRY/COUNTRY_COMPLETE';
export const COUNTRY_LOADING = '@COUNTRY/COUNTRY_LOADING';
export const COUNTRY_SEARCH = '@COUNTRY/COUNTRY_SEARCH';
export const COUNTRY_SINGLE_COMPLETE = '@COUNTRY/COUNTRY_SINGLE_COMPLETE';

interface CountryCompleteAction {
    type: typeof COUNTRY_COMPLETE;
    payload: Country[];
}

interface CountrySingleCompleteAction {
    type: typeof COUNTRY_SINGLE_COMPLETE;
    payload: Country;
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
    | CountrySingleCompleteAction
    | CountryLoadingAction
    | CountrySearchAction;
