import { JWT_STORAGE_KEY } from 'constants/jwt';

export const get = () => localStorage.getItem(JWT_STORAGE_KEY);

export const set = (token: string) => localStorage.setItem(JWT_STORAGE_KEY, token);

export const exist = () => !!localStorage.getItem(JWT_STORAGE_KEY);

export const clear = () => localStorage.removeItem(JWT_STORAGE_KEY);
