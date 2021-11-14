import * as actionTypes from '../constants/cartConstants';

export const cartReducer = (state = {cartItems : []}, action) => {
    switch(action.type) {
        case actionTypes.ADD_TO_CART: 
            const product = action.payload;

            const itemExist = state.cartItems.find((a) => a.item === product.item);

            if (itemExist) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((x) => x.item === itemExist.item ? product : x)
                }
            } else {
                return {
                    ...state,
                    cartItems: [...state.cartItems, product],
                }
            }
        case actionTypes.REMOVE_FROM_CART:
            const delItem = action.payload;

            return {
                ...state,
                cartItems: state.cartItems.filter((a) => a.item !== delItem),
            }
        case actionTypes.INCREASE_ITEM_QTY:
            const increaseProduct = action.payload;

            const productExist = state.cartItems.find((a) => a.item === increaseProduct);

            if (productExist) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((x) => x.item === productExist.item ? {
                        ...x,
                        qty: x.qty + 1,
                    } : x)
                }
            }
        case actionTypes.DECREASE_ITEM_QTY:
            const decreaseProduct = action.payload;

            const decreaseProductExist = state.cartItems.find((a) => a.item === decreaseProduct);
            if (decreaseProductExist) {
                return {
                    ...state,
                    cartItems: state.cartItems.map((x) => x.item === decreaseProductExist.item ? {
                        ...x,
                        qty: x.qty - 1,
                    } : x)
                }
            }

        case actionTypes.UPDATE_CART_SUCCESS:
            const products = action.payload;
                
            return {
                ...state,
                cartItems: products.forEach((product) => {
                    state.cartItems.map((x) => x.item === product ? {
                        ...x,
                        checked: true,
                    } : x)
                }),
            }
        case actionTypes.CART_RESET:
            return {
                ...state,
                cartItems: [],
            }
        default:
            return state
    }
}


export const saveCartReducer = (state = {savedCart : []}, action) => {
    switch(action.type) {
        case actionTypes.SAVE_CART_REQUEST:
            return {
                loading: true,
                savedCart: [],
            }
        case actionTypes.SAVE_CART_SUCCESS:
            return {
                loading: false,
                savedCart: action.payload,
            }
        case actionTypes.SAVE_CART_FAIL:
            return {
                loading: false,
                error: action.payload,
            }
        default: {
            return state;
        }
    }
}


// export const updateCartReducer = (state = {updateCart : []}, action) => {
//     switch(action.type) {
//         case actionTypes.UPDATE_CART_REQUEST:
//             return {
//                 loading: true,
//                 updateCart: {},
//             }
//         case actionTypes.UPDATE_CART_SUCCESS:
//             const products = action.payload;


//             return {
//                 loading: false,
//                 updateCart: action.payload,
//             }
//         case actionTypes.UPDATE_CART_FAIL:
//             return {
//                 loading: false,
//                 error: action.payload,
//             }
//         default: {
//             return state;
//         }
//     }
// }