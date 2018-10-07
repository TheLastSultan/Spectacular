import {RECEIVE_SPECTACLES, 
        RECEIVE_SPECTACLE,
        START_LOADING_ALL_SPECTACLES,
        START_LOADING_SINGLE_SPECTACLE
        } from '../actions/spectacle_action';
        
import merge from 'lodash/merge';

const state = {
    indexLoading: false,
    detailLoading: false, 
}

const loadingReducer = ( state = {}, action) => {

    switch(action.type){
        case RECEIVE_SPECTACLES:
            return merge({},state, {indexLoading: false})
        case START_LOADING_ALL_SPECTACLES:
            return merge({}, state, { indexLoading: true });
        case START_LOADING_SINGLE_SPECTACLE:
            return merge({},state, {detailLoading: true})
    }
}

export default loadingReducer; 


// import {
//     RECEIVE_ALL_POKEMON,
//     RECEIVE_SINGLE_POKEMON,
//     RECEIVE_NEW_POKEMON,
//     RECEIVE_POKEMON_ERRORS,
//     CREATE_POKEMON,
//     START_LOADING_ALL_POKEMON,
//     START_LOADING_SINGLE_POKEMON
//   } from '../actions/pokemon_actions';
  
//   const initialState = {
//     indexLoading: false,
//     detailLoading: false
//   };
  
//   const loadingReducer = (state = initialState, action) => {
//     Object.freeze(state);
//     switch (action.type) {
//       case RECEIVE_ALL_POKEMON:
//         return Object.assign({}, state, { indexLoading: false });
//       case RECEIVE_NEW_POKEMON:
//       case RECEIVE_SINGLE_POKEMON:
//       case RECEIVE_POKEMON_ERRORS:
//         return Object.assign({}, state, { detailLoading: false });
//       case START_LOADING_ALL_POKEMON:
//         return Object.assign({}, state, { indexLoading: true });
//       case CREATE_POKEMON:
//       case START_LOADING_SINGLE_POKEMON:
//         return Object.assign({}, state, { detailLoading: true });
//       default:
//         return state;
//     }
//   };
  
//   export default loadingReducer;
  



