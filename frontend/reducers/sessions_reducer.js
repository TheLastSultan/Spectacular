import {
    LOGOUT_CURRENT_USER,
    RECEIVE_CURRENT_USER } from '../actions/session_actions';
import {merge} from 'lodash';
  
export default (state = {id: null}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case LOGOUT_CURRENT_USER: 
          return {currentUser: null};
        default:
            return state;
    }
};
