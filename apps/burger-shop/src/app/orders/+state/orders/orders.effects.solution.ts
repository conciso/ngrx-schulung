import { Injectable } from '@angular/core';
import { act, Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs/operators';
import { changeOrder, orderChanged } from './orders.actions';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class OrdersEffects {

  constructor(private actions$: Actions, private http: HttpClient) {}

  changeOrderStateEffect$ = createEffect(() => this.actions$.pipe(
    ofType(changeOrder),
    switchMap(action => this.http.post('api/orders', action.order).pipe(
      map(() => orderChanged())
    ))
  ));
}
