import {RECEIVE_CURRENT_USER} from '../actions/session_actions';
import {merge} from 'lodash';

export default (state = {}, action) => {
  Object.freeze(state);

  // debugger;
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      debugger; 
      return merge({}, state, action.payload.user);
    default:
      return state;
  }
};

// session_token: "gR0XohetKT3fGY7lxN_6rA",
