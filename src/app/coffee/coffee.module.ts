import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { CoffeeOrderComponent } from './coffee-order/coffee-order.component';
import { coffeeReducer } from './coffee.reducer';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('coffee', coffeeReducer)
  ],
  exports: [CoffeeOrderComponent],
  declarations: [CoffeeOrderComponent]
})
export class CoffeeModule { }
