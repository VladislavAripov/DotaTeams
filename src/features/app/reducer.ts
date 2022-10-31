import * as actionTypes from './actionTypes';
import { ActionsType } from './types';

export interface IAppState {
    networkError: Error | null;
    isLoading?: boolean
}

const defaultState: IAppState = {
    networkError: null,
};

const reducer = (state: IAppState = defaultState, action: ActionsType): IAppState => {
    switch (action.type) {
        case actionTypes.SET_NETWORK_ERROR:
            return { ...state, networkError: action.error };

        case actionTypes.SET_LOADING:
            return { ...state, isLoading: action.payload };

        default:
            return state;
    }
};

export default reducer;
