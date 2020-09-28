import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { changeOrder } from '../+state/orders/orders.actions';
import { getAllOrders } from '../+state/orders/orders.selectors';

@Component({
  selector: 'orderlist',
  templateUrl: './oderlist.component.html',
  styleUrls: ['./oderlist.component.css']
})
export class OderlistComponent implements OnInit {

  orders$;

  constructor(private store: Store) { }

  ngOnInit() {
    this.orders$ = this.store.select(getAllOrders);
  }
}
