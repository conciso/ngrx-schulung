import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, switchMap, tap } from 'rxjs/operators';

import {
  addOrder,
  appLoaded,
  loadApp,
  connectSocket
} from './app.actions';
import { Socket } from 'ngx-socket-io';

@Injectable()
export class AppEffects {
  loadApp$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadApp),
      switchMap(() => [appLoaded({payload: []}), connectSocket()])
    )
  );

  connectSocket$ = createEffect(() =>
    this.actions$.pipe(
      ofType(connectSocket),
      mergeMap(() =>
        this.socket
          .fromEvent<{ id: number; name: string }>('kitchen')
          .pipe(map((order) => addOrder({order})))
      )
    )
  );

  constructor(private actions$: Actions, private socket: Socket) {}
}
