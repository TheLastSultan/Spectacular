import * as CartItemUtil from '../util/cart_api_util';

export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';
export const RECEIVE_CART_ITEMS = 'RECEIVE_CART_ITEMS';


export const receiveCartItems = spectacles => ({
    type: RECEIVE_CART_ITEMS,
    spectacles
})

export const removeCartItem = item => ({
    type: REMOVE_CART_ITEM,
    item
})


export const fetchCartItems = () => dispatch (
    CartItemUtil.fetchCart().then(spectacles => dispatch(receiveCartItems(spectacles)))
); 

export const deleteCartItem = (UserIdAndCartId) => dispatch (
    CartItemUtil.deleteCartItem(UserIdAndCartId).then(item => dispatch(removeCartItem(item)))
);



