export const fetchCart = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/cart'
    })
};

export const deleteCartItem = (UserIdAndCartId) => {
    return $.ajax({
        method: 'DELETE',
        url: '/api/cart',
        data: {UserIdAndCartId}
    })
};
