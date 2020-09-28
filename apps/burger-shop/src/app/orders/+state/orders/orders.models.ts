/**
 * Interface for the 'Orders' data
 */
export interface OrdersEntity {
  id: string;
  name: string;
  state: PreparationState;
}

export enum PreparationState {
  ordered = 'ordered',
  preparation = 'preparation',
  delivered = 'delivered',
  error = 'error'
}