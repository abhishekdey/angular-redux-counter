import { counterReducer } from './counter.reducer';
import { ActionReducerMap } from '@ngrx/store';
import { booksReducer } from './books.reducer';
import { collectionReducer } from './collection.reducer';
import { moviesReducer } from './movies.reducer';

export const store: ActionReducerMap<any> = {
  counterReducer,
  booksReducer,
  collectionReducer,
  moviesReducer,
};
