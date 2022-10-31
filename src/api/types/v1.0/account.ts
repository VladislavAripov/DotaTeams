import { Role } from './role';

export interface IUserClaims {
    name: string;
    phone: string | null;
    role: Role | Role[];
}

export interface ILoginRequest {
    login: string;
    password: string;
}

export interface iLoginResponse {
    test: string;
}
