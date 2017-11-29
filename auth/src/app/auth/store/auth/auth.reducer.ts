import { AuthState, initialAuthState } from './auth.state';
import { Action } from '@ngrx/store';

export function authReducer(state = initialAuthState, action: Action): AuthState {
  switch (action.type) {
    default:
      return state;
  }
}

export function userNavigateToLogin(state: AuthState) {
  const login = Object.assign({}, state.login, { error: null });
  return Object.assign({}, state, { login });
}

export const getLogin = (state: AuthState) => state.login;
export const getUsername = (state: AuthState) => state.testString;
