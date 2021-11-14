import * as actionTypes from "../constants/itemsContants";

export const getItemsReducer = (state = { items: [] }, action) => {
    switch(action.type) {
        case actionTypes.GET_ITEMS_REQUEST:
            return {
                loading: true,
                items: [],
            }
        case actionTypes.GET_ITEMS_SUCCESS:
            return {
                loading: false,
                items: action.payload,
            }
        case actionTypes.GET_ITEMS_FAIL:
            return {
                loading: false,
                error: action.payload,
            }
        default:
            return state;
    }
};


export const getItemDetailsReducer = (state = {item: {}}, action) => {
    switch(action.type) {
        case actionTypes.GET_ITEM_DETAILS_REQUEST:
            return {
                loading: true,
                item: {},
            }
        case actionTypes.GET_ITEM_DETAILS_SUCCESS:
            return {
                loading: false,
                item: action.payload,
            }
        case actionTypes.GET_ITEM_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload,
            }
        case actionTypes.GET_ITEM_DETAILS_RESET:
            return {
                item: {},
            }
        default: {
            return state;
        }
    }
};

export const newItemReducer = (state = { newItem: {} }, action) => {
    switch(action.type) {
        case actionTypes.NEW_ITEM_REQUEST:
            return {
                loading: true,
                newItem: {},
            }
        case actionTypes.NEW_ITEM_SUCCESS:
            return {
                loading: false,
                newItem: action.payload,
            }
        case actionTypes.NEW_ITEM_FAIL:
            return {
                loading: false,
                error: action.payload,
            }
        default:
            return state;
    }
};


