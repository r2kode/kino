import { useEffect, useContext } from 'react';
import { supabase } from '@/app/services/supabaseClient';
import { AuthContext, AuthContextType } from './Provider';
import { AuthActions } from './context';
import { CredentialsState } from '@/features/auth';

export function useAuthContext() {
  return useContext(AuthContext) as AuthContextType;
}

export const useAuth = () => {
  const { authState, dispatch } = useAuthContext();
  const { isAuthenticated } = authState;

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      dispatch({ type: AuthActions.SET_AUTH_SESSION, payload: { session } });
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      dispatch({ type: AuthActions.SET_AUTH_SESSION, payload: { session } });
    });
  }, []);

  const signIn = async (credentials: CredentialsState) => {
    const { username: email, password } = credentials;
    const {
      data: { session },
      error,
    } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    const isAuthenticated = !!session?.user?.aud && !error;
    dispatch({
      type: AuthActions.SET_AUTH_SESSION,
      payload: { isAuthenticated, error },
    });
  };

  const signOut = async () => {
    const { error } = await supabase.auth.signOut();
    dispatch({
      type: AuthActions.SET_AUTH_SESSION,
      payload: { isAuthenticated: false, error },
    });
  };

  return { authState, isAuthenticated, signIn, signOut };
};
