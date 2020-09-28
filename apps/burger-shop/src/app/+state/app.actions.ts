import { createAction, props } from '@ngrx/store';

export const connectSocket = createAction(
  '[WS/Api] Connect Websocket'
);

export const addOrder = createAction(
  '[WS/Api] Add single order',
  props<{ order: any }>()
);

export const loadApp = createAction(
  '[App] Load App',
);

export const appLoadError = createAction(
  '[App] App Load Error',
  props<{ payload: any }>()
);

export const appLoaded = createAction(
  '[App] App Loaded',
  props<{ payload: any[] }>()
);

