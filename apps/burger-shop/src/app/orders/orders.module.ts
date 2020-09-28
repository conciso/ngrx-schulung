import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromOrders from './+state/orders/orders.reducer';
import { OrdersEffects } from './+state/orders/orders.effects';
import { OderlistComponent } from './oderlist/oderlist.component';
import { ListItemComponent } from './list-item/list-item.component';

@NgModule({
  declarations: [OderlistComponent, ListItemComponent],
  exports: [OderlistComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromOrders.ORDERS_FEATURE_KEY, fromOrders.reducer),
    EffectsModule.forFeature([OrdersEffects]),
  ],
})
export class OrdersModule {}
