import { useReducer, createContext, ReactNode, Dispatch } from 'react';
import { AuthState } from './types';
import { initialState, authReducer, AuthActionTypes } from './context';

type AuthProviderProps = {
  children: ReactNode;
};

export type AuthContextType = {
  authState: AuthState;
  dispatch: Dispatch<AuthActionTypes>;
};

export const AuthContext = createContext<AuthContextType | null>(null);

export function AuthProvider({ children }: AuthProviderProps) {
  const [authState, dispatch] = useReducer(authReducer, initialState);

  return (
    <AuthContext.Provider value={{ authState, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}
