import * as CartItemUtil from '../util/cart_api_util';

export const REMOVE_CART_ITEM = 'REMOVE_CART_ITEM';
export const RECEIVE_CART_ITEMS = 'RECEIVE_CART_ITEMS';
export const RECEIVE_CART_ITEM = 'RECEIVE_CART_ITEM';

export const receiveCartItems = items => ({
    type: RECEIVE_CART_ITEMS,
    items
})

export const removeCartItem = item => ({
    type: REMOVE_CART_ITEM,
    item
})

export const receiveCartItem = item => ({
    type: RECEIVE_CART_ITEM,
    item
  });


export const fetchCartItems = () => dispatch=> (
    CartItemUtil.fetchCart().then(items => (dispatch (receiveCartItems(items))))
); 

export const deleteCartItem = (UserIdAndCartId) => dispatch => (
    CartItemUtil.deleteCartItem(UserIdAndCartId).then(item => (dispatch(removeCartItem(item))))
);

export const sendCartItem = (item) => dispatch => (
    CartItemUtil.sendItem(item).then( item => (dispatch(receiveCartItem(item))))
);



