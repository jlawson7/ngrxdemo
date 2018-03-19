import { NgModule } from '@angular/core';
import { CoffeeOrderComponent } from './coffee-order/coffee-order.component'

import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
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
