import {combineReducers } from 'redux';
import sessionsReducer from './sessions_reducer';
import usersReducer from './users_reducer';

export default combineReducers({
    sessions: sessionsReducer,
    currentUser: usersReducer
});
  