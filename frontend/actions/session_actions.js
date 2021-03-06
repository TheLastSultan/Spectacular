import * as SessionUtil from '../util/session_util';

export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
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


export const logout = () => dispatch => (SessionUtil.logout()
  .then(() => dispatch(logoutCurrentUser())));

  
export const login = user => dispatch => (
  SessionUtil.login(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), errors => (
    dispatch(receiveErrors(errors))
  ))
);

export const signUp = user => dispatch => (
  SessionUtil.signUp(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), errors => (
    dispatch(receiveErrors(errors))
  ))
);

