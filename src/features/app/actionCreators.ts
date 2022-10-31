import { INIT_APP, SET_LOADING, SET_NETWORK_ERROR } from './actionTypes';

export const initApp = () => ({ type: INIT_APP } as const);

export const setNetworkError = (error: Error) => ({ type: SET_NETWORK_ERROR, error } as const);

export const setLoading = (loading: boolean) => ({ type: SET_LOADING, payload: loading } as const);
