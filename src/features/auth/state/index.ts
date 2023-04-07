export enum ActionTypes {
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

export const initialCredentials: CredentialsState = {
  username: '',
  password: '',
};

export const credentialReducer = (
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
