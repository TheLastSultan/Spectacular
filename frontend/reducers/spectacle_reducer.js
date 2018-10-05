import {RECEIVE_SPECTACLE, RECEIVE_SPECTACLES} from '../actions/spectacle_action.js';
import merge from 'lodash/merge';

const spectacleReducer = ( state = {}, action) => {
    Object.freeze(state);
    let nextState = {};

    switch(action.type){
        case RECEIVE_SPECTACLES:
            debugger; 
            return merge({}, state, action.spectacle)
        case RECEIVE_SPECTACLE:
            action.spectacle
        default:
            return state;
    }
};

export default spectacleReducer;

