import { createReducer, on, Action } from '@ngrx/store';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

import * as OrdersActions from './orders.actions';
import * as AppActions from '../../../+state/app.actions';
import { OrdersEntity } from './orders.models';

export const ORDERS_FEATURE_KEY = 'orders';

export interface State extends EntityState<OrdersEntity> {
  selectedId?: string; // which Orders record has been selected
  error?: string | null; // last known error (if any)
}

export interface OrdersPartialState {
  readonly [ORDERS_FEATURE_KEY]: State;
}

export const ordersAdapter: EntityAdapter<OrdersEntity> = createEntityAdapter<
  OrdersEntity
>();

export const initialState: State = ordersAdapter.getInitialState({
});

const ordersReducer = createReducer(
  initialState,
  on(OrdersActions.addOrder, AppActions.addOrder, (state, { order }) =>
    ordersAdapter.addOne(order, state)
  )
);

export function reducer(state: State | undefined, action: Action) {
  return ordersReducer(state, action);
}
