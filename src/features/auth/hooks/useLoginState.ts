import { useReducer } from 'react';
import { credentialReducer, initialCredentials, ActionTypes } from '../state';

export const useLoginState = () => {
  const [credentials, dispatchCredentials] = useReducer(
    credentialReducer,
    initialCredentials
  );

  const setUserName = (username: string) => {
    dispatchCredentials({
      type: ActionTypes.SET_USERNAME,
      payload: username,
    });
  };

  const setPassword = (password: string) => {
    dispatchCredentials({
      type: ActionTypes.SET_PASSWORD,
      payload: password,
    });
  };

  const clearCredentials = () => {
    dispatchCredentials({
      type: ActionTypes.CLEAR_CREDENTIALS,
      payload: '',
    });
  };

  return {
    credentials,
    dispatchCredentials,
    setUserName,
    setPassword,
    clearCredentials,
  };
};
