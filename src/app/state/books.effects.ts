import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';

@Injectable()
export class BookEffects {
  loadMovies$ = createEffect(() =>
    this.actions$.pipe(
      ofType('[Movies Page] Load Movies'),
      mergeMap(() =>
        toPromise('https://jsonplaceholder.typicode.com/todos/1').then(
          (data) => data
        )
      )
    )
  );

  constructor(private actions$: Actions) {}
}

const toPromise = (val) => fetch(val).then((data) => data.json());
