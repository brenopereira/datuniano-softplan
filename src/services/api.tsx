import Axios, { AxiosError, AxiosRequestConfig } from 'axios';

const api = Axios.create({
    baseURL: 'http://testefront.dev.softplan.com.br/'
});
