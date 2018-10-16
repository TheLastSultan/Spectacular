export const fetchCart = () => {
    return $.ajax({
        method: 'GET',
        url: '/api/cart'
    })
};

export const sendItem = (item) => {
    return $.ajax({
        method: 'POST',
        url: '/api/cart',
        data: {item}
    })
} 

export const deleteCartItem = (UserIdAndCartId) => {
    return $.ajax({
        method: 'DELETE',
        url: '/api/cart',
        data: {UserIdAndCartId}
    })
};
