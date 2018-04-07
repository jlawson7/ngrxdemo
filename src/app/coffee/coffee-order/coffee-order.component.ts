import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import * as actions from '../coffee.actions';
import * as fromCoffee from '../coffee.reducer';

@Component({
  selector: 'app-coffee-order',
  templateUrl: './coffee-order.component.html',
  styleUrls: ['./coffee-order.component.scss']
})
export class CoffeeOrderComponent implements OnInit {

  coffees: Observable<any>;

  constructor(private store: Store<fromCoffee.State>) { }

  ngOnInit() {
    this.coffees = this.store.select(fromCoffee.selectAll);
  }

  createCoffee() {
    debugger;
    const coffee: fromCoffee.Coffee = {
      id: new Date().getUTCMilliseconds().toString(),
      size: 'small'
    };
    debugger;
    this.store.dispatch(new actions.Create(coffee));
    debugger;
  }

  updateCoffee(id, size) {
    this.store.dispatch(new actions.Update(id, {
      size: size
    }));
  }

  deleteCoffee(id) {
    this.store.dispatch(new actions.Delete(id));
  }

}
