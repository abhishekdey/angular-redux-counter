import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';

@Injectable()
export class BookEffects {
  loadMovies$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType('[Movies Page] Load Movies'),
        mergeMap(() =>
          toPromise('https://jsonplaceholder.typicode.com/todos/39').then(
            (movies) => ({
              type: '[Movies API] Movies Loaded Success',
              payload: movies,
            })
          )
        )
      ),
    {
      dispatch: false,
    }
  );
  constructor(private actions$: Actions) {}
}

const toPromise = (val) => fetch(val).then((data) => data.json());
