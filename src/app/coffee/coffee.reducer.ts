import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createFeatureSelector } from '@ngrx/store';

import * as actions from './coffee.actions';

// Main data interface
export interface Coffee {
  id: string;
  size: string;
}

// Entity adapter
export const coffeeAdapter = createEntityAdapter<Coffee>();
export interface State extends EntityState<Coffee> { }


// Default data / initial state
const defaultCoffee = {
  ids: ['LATTE'],
  entities: {
    'LATTE': {
      id: 'LATTE',
      size: 'small'
    }
  }
};

export const initialState: State = coffeeAdapter.getInitialState(defaultCoffee);

// Reducer
export function coffeeReducer(
  state: State = initialState,
  action: actions.CoffeeActions) {

  switch (action.type) {

    case actions.CREATE:
      return coffeeAdapter.addOne(action.coffee, state);

    case actions.UPDATE:
      return coffeeAdapter.updateOne({
        id: action.id,
        changes: action.changes,
      }, state);

    case actions.DELETE:
      return coffeeAdapter.removeOne(action.id, state);

    default:
      return state;
  }

}

// Create the default selectors
export const getCoffeeState = createFeatureSelector<State>('coffee');

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = coffeeAdapter.getSelectors(getCoffeeState);



