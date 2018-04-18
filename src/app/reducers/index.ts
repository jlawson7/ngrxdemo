import { ActionReducerMap } from '@ngrx/store';

import { coffeeReducer } from '../coffee/coffee.reducer';

export const reducers: ActionReducerMap<any> = {
  coffee: coffeeReducer
};
