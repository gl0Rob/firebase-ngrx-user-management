import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import * as AuthActions from '../../../../projects/xtream/firebase-ngrx-user-management/src/lib/actions/auth.actions';
import {tap} from 'rxjs/operators';
import {Actions, Effect, ofType} from '@ngrx/effects';

export type Action = AuthActions.AuthActionsUnion;

@Injectable()
export class CoreEffects {

  constructor(private actions: Actions, private router: Router) {
  }

  @Effect({dispatch: false})
  routeEffect = this.actions.pipe(
    ofType(AuthActions.AuthActionTypes.RegistrationSuccess),
    tap(() => {
      console.debug('prova');
      this.router.navigate(['/user']);
    })
  );

}