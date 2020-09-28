import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeOrder } from '../+state/orders/orders.actions';
import { OrdersEntity } from '../+state/orders/orders.models';

@Component({
  selector: 'list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent {

  @Input() order: OrdersEntity;

  constructor(private store: Store) { }

  changeState(order, newState) {
    this.store.dispatch(changeOrder({order, newState}))
  }
}
