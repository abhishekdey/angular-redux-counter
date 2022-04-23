import { createReducer, on } from '@ngrx/store';
import { MoviesList, UserList } from './movies.actions';

export const initialState: ReadonlyArray<{ Movies; Users }> = [];

export const moviesReducer = createReducer(
  initialState,
  on(MoviesList, (state, { movies }) => movies[0]),
  on(UserList, (state, { users }) => users[1])
);
