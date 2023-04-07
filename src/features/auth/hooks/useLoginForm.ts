import { useEffect, ChangeEvent, SyntheticEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/app/providers/auth/useAuth';
import { AuthError } from '@/app/providers/auth/types';
import { RoutePaths } from '@/app/providers/router';
import { CredentialsState } from '../state';
import { useLoginState } from './useLoginState';

export const useLoginForm = (): {
  credentials: CredentialsState;
  error: AuthError | null | undefined;
  handleUsernameChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handlePasswordChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleLoginFormSubmit: (e: SyntheticEvent) => void;
} => {
  const navigate = useNavigate();
  const { credentials, setUserName, setPassword, clearCredentials } =
    useLoginState();
  const { error, isAuthenticated, signIn } = useAuth();

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLoginFormSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    signIn(credentials);
    clearCredentials();
  };

  useEffect(() => {
    if (isAuthenticated && !error?.message) {
      navigate(RoutePaths.COLLECTION);
    }
  }, [error, isAuthenticated]);

  return {
    credentials,
    error,
    handlePasswordChange,
    handleUsernameChange,
    handleLoginFormSubmit,
  };
};
