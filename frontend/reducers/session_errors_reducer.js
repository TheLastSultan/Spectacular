import {
    SESSION_ERRORS,
    RECEIVE_CURRENT_USER } from '../actions/session_actions';
import {merge} from 'lodash';
  
export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return {};
        case SESSION_ERRORS:
            debugger; 
            return action.errors
        default:
            return state;
    }
};


  