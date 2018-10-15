export const fetchCart = () => {
    $.ajax({
        method: 'GET',
        url: 'api/cart'
    })
};

export const deleteCartItem = (UserIdAndCartId) => {
    $.ajax({
        method: 'DELETE',
        url: 'api/cart',
        data: {UserIdAndCartId}
    })
};
