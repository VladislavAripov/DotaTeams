import { InferValueTypes } from 'utils/types';
import * as actionCreators from './actionCreators';

export type ActionsType = ReturnType<InferValueTypes<typeof actionCreators>>;
