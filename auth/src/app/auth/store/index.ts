import { getLogin } from './auth/auth.reducer';
import { AuthState } from './auth/auth.state';
import { ActionReducerMap, createSelector } from '@ngrx/store';
import { EffectsModule } from 'ngrx/@ngrx/effects';
import { AuthEffects } from './auth/auth.effects';
import * as fromAuth from './auth/auth.reducer';
import { createFeatureSelector } from '@ngrx/store';


export interface RootAuthState {
  auth: AuthState
}

export const getAuthModuleState = createFeatureSelector('auth');
export const getAuthState = createSelector(getAuthModuleState, (state: RootAuthState) => state.auth)
export const getAuthLogin = createSelector(getAuthState, getLogin);

export const reducers: ActionReducerMap<any> = {
  auth: fromAuth.authReducer
}
