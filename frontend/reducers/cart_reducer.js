import {REMOVE_CART_ITEM, RECEIVE_CART_ITEMS, RECEIVE_CART_ITEM} from '../actions/cart_actions';
import {LOGOUT_CURRENT_USER} from '../actions/session_actions';
import merge from 'lodash/merge'

const cartReducer = (state = {} , action) => {
    Object.freeze(state)
    let nextState = merge({}, state);
    switch (action.type) {
        case REMOVE_CART_ITEM: 
            delete nextState[action.item.id]
            return nextState 
        case RECEIVE_CART_ITEMS:
            return merge({}, state, action.items)
        case LOGOUT_CURRENT_USER:
            return merge({})
        case RECEIVE_CART_ITEM:            
            return merge({},state, action.item)
        default:
            return state
    }
}

export default cartReducer; 