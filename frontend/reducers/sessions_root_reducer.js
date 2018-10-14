import {combineReducers } from 'redux';
import sessionsReducer from './sessions_reducer';
import usersReducer from './users_reducer';
import sessionErrors from './session_errors_reducer'

export default combineReducers({
    sessions: sessionsReducer,
    currentUser: usersReducer,
    sessionErrors

});
  