import {
    LOGOUT_CURRENT_USER,
    RECEIVE_CURRENT_USER } from '../actions/session_actions';
import {merge} from 'lodash';
  
export default (state = {id: null}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case LOGOUT_CURRENT_USER:
          debugger; 
          return {currentUser: null};
        // case RECEIVE_CURRENT_USER: 
        //     return Object.assign({}, state, action.payload.user);
        default:
            return state;
    }
};
