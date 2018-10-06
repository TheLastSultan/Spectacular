import * as SessionUtil from '../util/session_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const SESSION_ERRORS = 'SESSION_ERRORS';
export const CREATE_USER = 'CREATE_USER';


export const receiveCurrentUser = payload => ({
  type: RECEIVE_CURRENT_USER,
  payload
});

export const receiveErrors = errors => ({
  type: SESSION_ERRORS,
  errors
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});


const success = payload => {
  dispatch(receiveCurrentUser(payload));
};

const failure = errors => {
  dispatch(receiveErrors(errors));
};

export const createThunkAction = callback => user => dispatch => {
  return callback(user).then(success, failure);
};

export const logout = createThunkAction(SessionUtil.logout);
export const login = createThunkAction(SessionUtil.login);
export const signUp = createThunkAction(SessionUtil.signUp);
