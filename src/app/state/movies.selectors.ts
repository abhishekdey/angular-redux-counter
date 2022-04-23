import { createFeatureSelector, createReducer, on } from '@ngrx/store';
import { createSelector } from '@ngrx/store';
import { Movies, Users } from '../movies-list/movies.models';

export const initialState: ReadonlyArray<{ Movies: Movies; Users: Users }> = [];

export const selectedMoviesList =
  createFeatureSelector<ReadonlyArray<Movies>>('movies');

export const selectedUserList =
  createFeatureSelector<ReadonlyArray<Movies>>('users');

export const moviesReducer = createSelector(selectedMoviesList, (movies) => {
  return movies.map((id) => movies.find((movie) => movie.id));
});

export const userReducer = createSelector(selectedUserList, (users) => {
  return users.map((id) => users.find((user) => user.id));
});
