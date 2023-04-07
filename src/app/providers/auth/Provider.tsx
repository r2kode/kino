import { useReducer, createContext, ReactNode, Dispatch } from 'react';
import {
  initialState,
  authReducer,
  AuthActionTypes,
  AuthState,
} from './context';

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
