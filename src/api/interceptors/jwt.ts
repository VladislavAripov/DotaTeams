/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import axios, { AxiosError, AxiosResponse, AxiosRequestConfig, AxiosInstance } from 'axios';
import { JWT_EXPIRED_HTTP_HEADER, JWT_ERROR_DESCRIPTION_HTTP_HEADER } from 'constants/jwt';
import { login, logout } from 'features/account';
import { store } from 'App/root/store';
import * as jwt from 'App/root/jwt';
import { refreshToken } from '../v1.0/account';

const buildJWTAuthorizationHeader = (token: string) => `Bearer ${token}`;

const injectJWT = (config: AxiosRequestConfig) => {
    if (config.headers!.Authorization) {
        const token = jwt.get();
        if (token) {
            config.headers!.Authorization = buildJWTAuthorizationHeader(token);
        }
    }

    return config;
};

const isUnauthorizedError = (error: AxiosError) => !!error.response && error.response.status === 401;

const isTokenExpiredError = (error: AxiosError) =>
    !!(error.response && error.response.headers[JWT_EXPIRED_HTTP_HEADER]);

const isTokenInvalid = (error: AxiosError) => {
    const description = error.response?.headers[JWT_ERROR_DESCRIPTION_HTTP_HEADER] ;
    return description && description.indexOf('invalid_token') !== -1;
};

class UnauthorizedErrorHandler {
    private tokenRefreshingPromise: Promise<string> | null = null;

    constructor() {
        this.handle = this.handle.bind(this);
        this.handleTokenExpiration = this.handleTokenExpiration.bind(this);
        this.handleInvalidToken = this.handleInvalidToken.bind(this);
        this.refreshToken = this.refreshToken.bind(this);
        this.repeatRequest = this.repeatRequest.bind(this);
        this.handleFreshToken = this.handleFreshToken.bind(this);
    }

    public handle(error: AxiosError): Promise<AxiosResponse> {
        if (isTokenExpiredError(error) || !error.response) {
            return this.handleTokenExpiration(error);
        }

        if (isTokenInvalid(error)) {
            return this.handleInvalidToken(error);
        }

        return Promise.reject(error);
    }

    public async handleTokenExpiration(error: AxiosError): Promise<AxiosResponse> {
        try {
            const token = await this.refreshToken();
            return await this.repeatRequest(error.config!, token);
        } catch (exception) {
            if (isUnauthorizedError(exception)) {
                store.dispatch(logout());
            }

            throw exception;
        }
    }

    public handleInvalidToken(error: AxiosError): Promise<AxiosResponse> {
        store.dispatch(logout());
        return Promise.reject(error);
    }

    private refreshToken(): Promise<string> {
        if (!this.tokenRefreshingPromise) {
            const axiosInstance = axios.create();
            axiosInstance.interceptors.request.use(injectJWT);
            this.tokenRefreshingPromise = refreshToken(axiosInstance).then(this.handleFreshToken.bind(this));
        }

        return this.tokenRefreshingPromise;
    }

    private handleFreshToken(response: AxiosResponse<string>): Promise<string> {
        const token = response.data;
        store.dispatch(login(token));

        this.tokenRefreshingPromise = null;

        return Promise.resolve(token);
    }

    private repeatRequest(requestConfig: AxiosRequestConfig, token: string): Promise<AxiosResponse> {
        return axios.request({
            ...requestConfig,
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            headers: {
                ...requestConfig.headers,
                Authorization: buildJWTAuthorizationHeader(token),
            },
        });
    }
}

const unauthorizedErrorHandler = new UnauthorizedErrorHandler();

export const handleJWTError = (error: AxiosError) => {
    if (isUnauthorizedError(error) || !error.response) {
        return unauthorizedErrorHandler.handle(error);
    }

    return Promise.reject(error);
};

export const addJwtInterceptors = (axiosInstance: AxiosInstance) => {
    axiosInstance.interceptors.request.use(injectJWT);
    axiosInstance.interceptors.response.use(undefined, handleJWTError);
};
