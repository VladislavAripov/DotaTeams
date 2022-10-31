import { Reducer } from 'redux';
import { IUserClaims } from 'api/types/v1.0/account';
import * as actionTypes from './actionTypes';
import { ActionsType } from './types';

export interface IState {
    user: IUserClaims | null;
}

const defaultState: IState = {
    user: null,
};

const reducer: Reducer<IState, ActionsType> = (
    state = defaultState,
    action
) => {
    switch (action.type) {
        case actionTypes.SAVE_USER:
            return {
                ...state,
                user: action.payload,
            };

        default:
            return state;
    }
};

export default reducer;
