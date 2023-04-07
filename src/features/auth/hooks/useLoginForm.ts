import { useReducer, ChangeEvent, SyntheticEvent } from 'react';
import { useAuth } from '@/app/providers/auth/useAuth';
import { AuthError } from '@/app/providers/auth/types';

enum ActionTypes {
  SET_USERNAME = 'SET_USERNAME',
  SET_PASSWORD = 'SET_PASSWORD',
  CLEAR_CREDENTIALS = 'CLEAR_CREDENTIALS',
}

export type CredentialsState = {
  username: string;
  password: string;
};

type CredentialsAction = {
  type: keyof typeof ActionTypes;
  payload: string;
};

const initialCredentials: CredentialsState = {
  username: '',
  password: '',
};

const credentialReducer = (
  state: CredentialsState,
  action: CredentialsAction
) => {
  const { payload } = action;
  switch (action.type) {
    case ActionTypes.SET_USERNAME:
      return {
        ...state,
        username: payload,
      };
    case ActionTypes.SET_PASSWORD:
      return {
        ...state,
        password: payload,
      };
    case ActionTypes.CLEAR_CREDENTIALS:
      return { ...state, username: payload, password: payload };
    default:
      return state;
  }
};

export const useLoginForm = (): {
  credentials: CredentialsState;
  error: AuthError;
  handleUsernameChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handlePasswordChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleLoginFormSubmit: (e: SyntheticEvent) => void;
} => {
  const [credentials, dispatchCredentials] = useReducer(
    credentialReducer,
    initialCredentials
  );
  const { error, signIn } = useAuth();

  const handleUsernameChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatchCredentials({
      type: ActionTypes.SET_USERNAME,
      payload: e.target.value,
    });
  };

  const handlePasswordChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatchCredentials({
      type: ActionTypes.SET_PASSWORD,
      payload: e.target.value,
    });
  };

  const handleLoginFormSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    signIn(credentials);
    dispatchCredentials({
      type: ActionTypes.CLEAR_CREDENTIALS,
      payload: '',
    });
  };

  return {
    credentials,
    error,
    handlePasswordChange,
    handleUsernameChange,
    handleLoginFormSubmit,
  };
};
