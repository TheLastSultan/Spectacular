import * as CartItemUtil from '../util/cart_api_util'
import {receiveSpectacles} from './spectacle_action'

export const RECIEVE_CART_ITEMS = 'RECIEVE_CART_ITEMS';
export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';


export const fetchCartItems = () => dispatch (
    CartItemUtil.fetchCart().then( spectacles => dispatch(receiveSpectacles(spectacles)))
); 

export const deleteCartItem = () => dispatch (
    CartItemUtil.deleteCartItem(UserIdAndCartId).then(item => dispatch(removeCartItem(item)))
);



