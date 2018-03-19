import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoffeeModule } from './coffee/coffee.module';
import { reducers } from './reducers';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
    CoffeeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


























































// export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
//   return function(state, action) {
//     console.log('state', state);
//     console.log('action', action);

//     return reducer(state, action);
//   }
// }

// export const metaReducers: MetaReducer<any>[] = [debug];
