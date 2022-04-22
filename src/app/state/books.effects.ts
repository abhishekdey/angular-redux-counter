import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { ajax } from 'rxjs/ajax';
import { map, mergeMap, switchMap, tap } from 'rxjs/operators';

@Injectable()
export class BookEffects {
  loadMovies$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType('[Movies Page] Load Movies'),
        mergeMap(() =>
          toPromise('https://jsonplaceholder.typicode.com/todos/29').then(
            (movies) => ({
              type: '[Movies API] Movies Loaded Success',
              payload: movies,
            })
          )
        ),
        tap((val) => console.log(val.payload)),
        switchMap((val) =>
          toPromise(
            'https://jsonplaceholder.typicode.com/users/' + val.payload.userId
          ).then((movies) => ({
            type: '[Movies API] Movies Loaded Success',
            payload: movies,
          }))
        ),
        tap((val) => console.log(val.payload))
      ),
    {
      dispatch: false,
    }
  );

  // loadMovies2$ = createEffect(
  //   () =>
  //     this.actions$.pipe(
  //       ofType('[Movies Page] Load Movies'),
  //       mergeMap(() =>
  //         ajax('https://jsonplaceholder.typicode.com/todo/59').pipe(
  //           map((movies) => ({
  //             type: '[Movies API] Movies Loaded Success',
  //             payload: movies,
  //           }))
  //         )
  //       )
  //     ),
  //   {
  //     dispatch: false,
  //   }
  // );

  constructor(private actions$: Actions) {}
}

const toPromise = (val) => fetch(val).then((data) => data.json());
