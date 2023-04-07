import { useReducer, ChangeEvent, SyntheticEvent } from 'react';
import { useAuth } from '@/app/providers/auth/useAuth';

enum ActionTypes {
  SET_USERNAME = 'SET_USERNAME',
  SET_PASSWORD = 'SET_PASSWORD',
}

export type CredentialsState = {
  username: string;
  password: string;
};

type CredentialsAction = {
  type: keyof typeof ActionTypes;
  payload: string;
};

const credentialReducer = (
  state: CredentialsState,
  action: CredentialsAction
) => {
  switch (action.type) {
    case ActionTypes.SET_USERNAME:
      return {
        ...state,
        username: action.payload,
      };
    case ActionTypes.SET_PASSWORD:
      return {
        ...state,
        password: action.payload,
      };
    default:
      return state;
  }
};

export const useLoginForm = (): {
  handleUsernameChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handlePasswordChange: (e: ChangeEvent<HTMLInputElement>) => void;
  handleLoginFormSubmit: (e: SyntheticEvent) => void;
} => {
  const [credentials, dispatchCredentials] = useReducer(credentialReducer, {
    username: '',
    password: '',
  });
  const { signIn } = useAuth();

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
  };

  return {
    handlePasswordChange,
    handleUsernameChange,
    handleLoginFormSubmit,
  };
};
