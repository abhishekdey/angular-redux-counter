import { createAction, props } from '@ngrx/store/src/action_creator';
import { Movies, Users } from '../movies-list/movies.models';

export const MoviesList = createAction(
  '[Movies API] Movies Loaded Success',
  props<{ movies: Movies }>()
);

export const UserList = createAction(
  '[Movies API] Movies Loaded Success',
  props<{ users: Users }>()
);
