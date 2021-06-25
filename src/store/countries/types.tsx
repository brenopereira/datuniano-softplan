export interface Country {
    capital: string;
    name: string;
    flag: {
        emoji: string;
    };
}

export interface CountryState {
    countries: Country[];
    loading: boolean;
}

export const COUNTRY_COMPLETE = '@COUNTRY/COUNTRY_COMPLETE';
export const COUNTRY_LOADING = '@COUNTRY/COUNTRY_LOADING';

interface CountryCompleteAction {
    type: typeof COUNTRY_COMPLETE;
    payload: Country[];
}

interface CountryLoadingAction {
    type: typeof COUNTRY_LOADING;
}

export type CountryActionTypes = CountryCompleteAction | CountryLoadingAction;
