import {RECEIVE_SPECTACLES, 
        RECEIVE_SPECTACLE,
        START_LOADING_ALL_SPECTACLES,
        START_LOADING_SINGLE_SPECTACLE
        } from '../actions/spectacle_action';
        
import merge from 'lodash/merge';

const initialState = {
    indexLoading: false,
    detailLoading: false, 
}

const loadingReducer = ( state = initialState, action) => {

    switch(action.type){
        case RECEIVE_SPECTACLES:  
            return merge({},state, {indexLoading: false, detailLoading: false})
        case START_LOADING_ALL_SPECTACLES:
            return merge({}, state, { indexLoading: true});
        case START_LOADING_SINGLE_SPECTACLE:
            return merge({},state, {detailLoading: true});
        case RECEIVE_SPECTACLE:
        default:
            return state; 
    }
};

export default loadingReducer; 

