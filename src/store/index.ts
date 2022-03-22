import { counterReducer } from './counter.reducer';
import { ActionReducerMap } from '@ngrx/store';

export const store: ActionReducerMap<any> = {
  counterReducer,
};
