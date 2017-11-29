import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';
import { Actions, Effect } from '@ngrx/effects';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthEffects {

  @Effect({ dispatch: false })
  UserNavigateToRegister$: Observable<Action> = this.actions$
    .ofType('')
    .do(() => console.log('TEST EFFECT!'));


  constructor(
    private actions$: Actions,
  ) { }
}
