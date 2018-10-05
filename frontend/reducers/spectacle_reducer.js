import {RECEIVE_SPECTACLE, RECEIVE_SPECTACLES} from '../actions/spectacle_action.js';
import merge from 'lodash/merge';

const spectacleReducer = ( state = {}, action) => {
    Object.freeze(state);
    let nextState = {};

    switch(action.type){
        case RECEIVE_SPECTACLES:
            return merge({}, state, action.spectacles)
        case RECEIVE_SPECTACLE:
            debugger; 
        default:
            return merge({},state, action.spectacle)
    }
};

export default spectacleReducer;

