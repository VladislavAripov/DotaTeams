import { IUserClaims } from 'api/types/v1.0/account';
import {
    SAVE_USER,
    LOGIN,
    LOGOUT,
    RELOGIN,
} from './actionTypes';

export const saveUser = (user: IUserClaims) =>
    ({ type: SAVE_USER, payload: user } as const);
export const login = (token: string) =>
    ({ type: LOGIN, payload: token } as const);
export const logout = () => ({ type: LOGOUT } as const);
export const relogin = () => ({ type: RELOGIN } as const);
