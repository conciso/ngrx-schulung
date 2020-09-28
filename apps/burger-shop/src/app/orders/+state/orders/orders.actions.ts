import { createAction, props } from '@ngrx/store';
import { OrdersEntity, PreparationState } from './orders.models';

export const addOrder = createAction(
  '[Orders] add single order',
  props<{ order: OrdersEntity }>()
);

export const changeOrder = createAction(
  '[Orders] change the order state',
  props<{ order: OrdersEntity, newState: PreparationState }>()
);

export const orderChanged = createAction(
  '[Orders] the order state has changed'
);

export const loadOrdersFailure = createAction(
  '[Orders] Load Orders Failure',
  props<{ error: any }>()
);
