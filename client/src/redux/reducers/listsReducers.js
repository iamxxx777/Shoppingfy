import * as actionTypes from "../constants/listsConstants";

export const getListsReducer = (state = { lists: [] }, action) => {
    switch(action.type) {
        case actionTypes.GET_LISTS_REQUEST:
            return {
                loading: true,
                lists: [],
            }
        case actionTypes.GET_LISTS_SUCCESS:
            return {
                loading: false,
                lists: action.payload,
            }
        case actionTypes.GET_LISTS_FAIL:
            return {
                loading: false,
                error: action.payload,
            }
        default:
            return state;
    }
};


export const getListDetailsReducer = (state = {list: {}}, action) => {
    switch(action.type) {
        case actionTypes.GET_LIST_DETAILS_REQUEST:
            return {
                loading: true,
                list: {},
            }
        case actionTypes.GET_LIST_DETAILS_SUCCESS:
            return {
                loading: false,
                list: action.payload,
            }
        case actionTypes.GET_LIST_DETAILS_FAIL:
            return {
                loading: false,
                error: action.payload,
            }
        case actionTypes.GET_LIST_DETAILS_RESET:
            return {
                list: {},
            }
        default: {
            return state;
        }
    }
};

export const currentListReducer = (state = { currentList: {} }, action) => {
    switch(action.type) {
        case actionTypes.NEW_LIST_REQUEST:
            return {
                loading: true,
                currentList: {},
            }
        case actionTypes.NEW_LIST_SUCCESS:
            return {
                loading: false,
                currentList: action.payload,
            }
        case actionTypes.NEW_LIST_FAIL:
            return {
                loading: false,
                error: action.payload,
            }
        default:
            return state;
    }
};


// export const updateCurrentListReducer = (state = { currentList: {} }, action) => {
//     switch(action.type) {
//         case actionTypes.UPDATE_LIST_REQUEST:
//             return {
//                 loading: true,
//                 currentList: {},
//             }
//         case actionTypes.UPDATE_LIST_SUCCESS:
//             return {
//                 loading: false,
//                 currentList: action.payload,
//             }
//         case actionTypes.UPDATE_LIST_FAIL:
//             return {
//                 loading: false,
//                 error: action.payload,
//             }
//         default:
//             return state;
//     }
// };


export const cancelListReducer = (state = { currentList: {} }, action) => {
    switch(action.type) {
        case actionTypes.CANCEL_LIST_REQUEST:
            return {
                loading: true,
                currentList: {},
            }
        case actionTypes.CANCEL_LIST_SUCCESS:
            return {
                loading: false,
                currentList: action.payload,
            }
        case actionTypes.CANCEL_LIST_FAIL:
            return {
                loading: false,
                error: action.payload,
            }
        default:
            return state;
    }
};


export const completeListReducer = (state = { currentList: {} }, action) => {
    switch(action.type) {
        case actionTypes.COMPLETE_LIST_REQUEST:
            return {
                loading: true,
                currentList: {},
            }
        case actionTypes.COMPLETE_LIST_SUCCESS:
            return {
                loading: false,
                currentList: action.payload,
            }
        case actionTypes.COMPLETE_LIST_FAIL:
            return {
                loading: false,
                error: action.payload,
            }
        default:
            return state;
    }
};