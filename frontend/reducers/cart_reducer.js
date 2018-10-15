import {REMOVE_CART_ITEM, RECEIVE_CART_ITEMS} from '../actions/cart_actions';
import merge from 'lodash/merge'

const cartReducer = (state = {} , action) => {
    Object.freeze(state)
    switch (action.type) {
        case REMOVE_CART_ITEM:
            debugger; 
            // nextState = merge({},state);
            // delete nextstate[action.cartitem.id]
            // return nextState 
        case RECEIVE_CART_ITEMS:
            return merge({}, state, action.spectacles)
        default:
            return state
    }
}

export default cartReducer; 