import { takeLatest, put, call, all, takeEvery } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { INIT_APP } from 'features/app';
import * as jwt from 'App/root/jwt';
import { refreshToken } from 'api/v1.0/account';
import { handleApiError } from 'api/v1.0/common';
import { Pages } from 'constants/links';
import parse from 'utils/jwt';
import { IUserClaims } from 'api/types/v1.0/account';
import * as actionCreators from './actionCreators';
import { LOGIN, LOGOUT, RELOGIN } from './actionTypes';

type ILoginAction = ReturnType<typeof actionCreators.login>;

export const goToLoginPage = () => (window.location.href = Pages.RegistrationLink.url);

export function* initApp() {
    const token = (yield call([jwt, 'get'])) as string | null;
    if (token) {
        yield put(actionCreators.login(token));
    }
}

export function* login({ payload: token }: ILoginAction) {
    yield call([jwt, 'set'], token);
    const user = (yield call(parse, token)) as IUserClaims;
    yield put(actionCreators.saveUser(user));
}

export function* logout() {
    yield call([jwt, 'clear']);
    yield call(goToLoginPage);
}

export function* relogin() {
    try {
        const response = (yield call(refreshToken)) as AxiosResponse<string>;
        yield call(login, actionCreators.login(response.data));
    } catch (exception) {
        yield call(handleApiError, exception);
    }
}

export default function* watch() {
    yield all([
        takeEvery(INIT_APP, initApp),
        takeLatest(LOGIN, login),
        takeLatest(LOGOUT, logout),
        takeLatest(RELOGIN, relogin),
    ]);
}
