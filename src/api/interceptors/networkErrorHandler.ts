import { AxiosError, AxiosInstance } from 'axios';
import { setNetworkError } from 'features/app';
import { store } from 'App/root/store';
import { handleJWTError } from './jwt';

const isNetworkError = (error: AxiosError) => !!error.isAxiosError && !error.response;

const handleNetworkError = (error: AxiosError) => {
    // IE treats 401 as Network Error (doesn't set response or error code)
    // So need to try handle this error as JWT error and (if catch) set Network error
    if ((isNetworkError(error))) {
        handleJWTError(error).catch((_)=>store.dispatch(setNetworkError(error)));
    }

    return Promise.reject(error);
};

const addInterceptors = (axiosInstance: AxiosInstance) =>
    axiosInstance.interceptors.response.use(undefined, handleNetworkError);

export default addInterceptors;
