import { TestBed, async } from '@angular/core/testing';

import { Observable } from 'rxjs';

import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';

import { NxModule, DataPersistence } from '@nrwl/angular';
import { hot } from '@nrwl/angular/testing';

import { OrdersEffects } from './orders.effects';
import * as OrdersActions from './orders.actions';

describe('OrdersEffects', () => {
  let actions: Observable<any>;
  let effects: OrdersEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [NxModule.forRoot()],
      providers: [
        OrdersEffects,
        DataPersistence,
        provideMockActions(() => actions),
        provideMockStore(),
      ],
    });

    effects = TestBed.get(OrdersEffects);
  });

  describe('loadOrders$', () => {
    it('should work', () => {
      actions = hot('-a-|', { a: OrdersActions.loadOrders() });

      const expected = hot('-a-|', {
        a: OrdersActions.loadOrdersSuccess({ orders: [] }),
      });

      expect(effects.loadOrders$).toBeObservable(expected);
    });
  });
});
