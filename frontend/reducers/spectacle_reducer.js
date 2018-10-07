import {RECEIVE_SPECTACLE, RECEIVE_SPECTACLES} from '../actions/spectacle_action.js';
import merge from 'lodash/merge';

const spectacleReducer = ( state = {}, action) => {
    Object.freeze(state);
    
    switch(action.type){
        case RECEIVE_SPECTACLES: 
            return merge({}, state, action.spectacles)
        case RECEIVE_SPECTACLE:
            debugger; 
        default:
            return state; 
    }
};

export default spectacleReducer;

