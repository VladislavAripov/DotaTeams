import axios, { AxiosPromise, AxiosRequestConfig } from 'axios';

export function axiosGet<TResponse>(url: string) : AxiosPromise<TResponse>
{
    return axios.get<TResponse>(url, getAxiosConfigAuth());
}

export function axiosPost<TResponse>(url: string) : AxiosPromise<TResponse>
{
    return axios.post<TResponse>(url, null, getAxiosConfigAuth());
}

export function axiosPostRequest<TRequest, TResponse>(url: string, request: TRequest) : AxiosPromise<TResponse>
{
    return axios.post<TResponse>(url, request, getAxiosConfigAuth());
}

export function axiosPostNoResponse<TRequest>(url: string, request: TRequest)
{
    return axios.post(url, request, getAxiosConfigAuth());
}

export function axiosPut<TResponse>(url: string) : AxiosPromise<TResponse>
{
    return axios.put<TResponse>(url, null, getAxiosConfigAuth());
}

export function axiosPutRequest<TRequest, TResponse>(url: string, request: TRequest) : AxiosPromise<TResponse>
{
    return axios.put<TResponse>(url, request, getAxiosConfigAuth());
}

export function axiosLoadFilesRequest<TResponse>(url: string, data: FormData) : AxiosPromise<TResponse>
{
    return axios.post<TResponse>(url, data, getAxiosConfigAuthForFiles());
}

export function getAxiosConfigAuth() : AxiosRequestConfig
{
    return {
        auth: {
            username: 'User0253',
            password: 'User0253',
        },
    };
}

export function getAxiosConfigAuthForFiles() : AxiosRequestConfig
{
    const config: AxiosRequestConfig = {
        auth: {
            username: 'User0253',
            password: 'User0253',
        },
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    };

    return config;
}
