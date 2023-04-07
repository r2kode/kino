import { AuthError, Session } from '@supabase/supabase-js';

export type AuthState = {
  isAuthenticated?: boolean;
  error?: AuthError | null;
  session?: Session | null;
};

export { AuthError };
