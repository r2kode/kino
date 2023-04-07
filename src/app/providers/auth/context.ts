import { AuthState } from './types';

export enum AuthActions {
  SET_AUTH_SESSION = 'SET_AUTH_SESSION',
}

export type AuthActionTypes = {
  type: keyof typeof AuthActions;
  payload: AuthState;
};

export const initialState: AuthState = {
  isAuthenticated: false,
  error: null,
  session: null,
};

export const authReducer = (
  state: AuthState,
  action: AuthActionTypes
): AuthState => {
  const { payload } = action;
  switch (action.type) {
    case AuthActions.SET_AUTH_SESSION:
      return { ...state, ...payload };
    default:
      return state;
  }
};
