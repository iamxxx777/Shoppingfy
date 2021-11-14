import * as actionTypes from "../constants/cartConstants";

export const addToCart = (item) => async (dispatch, getState) => {

    dispatch({
        type: actionTypes.ADD_TO_CART,
        payload: {
            item: item._id,
            name: item.name,
            category: item.category,
            qty: 1,
            checked: false
        }
    })

    localStorage.setItem('shoppingCart', JSON.stringify(getState().cart.cartItems));
};

export const removeFromCart = (id) => async (dispatch, getState) => {
    dispatch({
        type: actionTypes.REMOVE_FROM_CART,
        payload: id
    });

    localStorage.setItem('shoppingCart', JSON.stringify(getState().cart.cartItems));
};

export const increaseQty = (id) => async (dispatch, getState) => {
    dispatch({
        type: actionTypes.INCREASE_ITEM_QTY,
        payload: id
    });

    localStorage.setItem('shoppingCart', JSON.stringify(getState().cart.cartItems));
}

export const decreaseQty = (id) => async (dispatch, getState) => {
    dispatch({
        type: actionTypes.DECREASE_ITEM_QTY,
        payload: id
    });

    localStorage.setItem('shoppingCart', JSON.stringify(getState().cart.cartItems));
}

export const handleUpdate = (data) => async (dispatch) => {
    dispatch({
        type: actionTypes.UPDATE_CART_REQUEST,
        payload: data
    })
}

