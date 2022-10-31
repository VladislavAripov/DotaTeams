import axios, { AxiosInstance } from 'axios';
import { ILoginRequest, iLoginResponse } from 'api/types/v1.0/account';

const baseUrl = '/api/v1.0/account';

export const login = (loginRequest: ILoginRequest) =>
    axios.post<iLoginResponse>(`${baseUrl}/login`, loginRequest);

export const logout = () => axios.post(`${baseUrl}/logout`);

export const refreshToken = (axiosInstance: AxiosInstance = axios) =>
    axiosInstance.post<string>(`${baseUrl}/token/refresh`);
