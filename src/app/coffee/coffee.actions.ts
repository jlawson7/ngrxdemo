import { Action } from '@ngrx/store';

import { Coffee } from './coffee.reducer';


export const CREATE     = '[Coffees] Create';
export const UPDATE     = '[Coffees] Update';
export const DELETE     = '[Coffees] Delete';

export class Create implements Action {
    readonly type = CREATE;
    constructor(public coffee: Coffee) { }
}

export class Update implements Action {
    readonly type = UPDATE;
    constructor(
        public id: string,
        public changes: Partial<Coffee>,
      ) { }
}

export class Delete implements Action {
    readonly type = DELETE;
    constructor(public id: string) { }
}

export type CoffeeActions
= Create
| Update
| Delete;
