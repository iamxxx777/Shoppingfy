import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from "redux-thunk";

import { getItemsReducer, getItemDetailsReducer, newItemReducer } from "./reducers/itemsReducer";
import { cartReducer } from './reducers/cartReducer';
import { currentListReducer, getListsReducer, getListDetailsReducer } from './reducers/listsReducers';
import { getStatsReducer } from "./reducers/statsReducer"

const reducer = combineReducers({
    items: getItemsReducer,
    item: getItemDetailsReducer,
    newItem: newItemReducer,
    cart: cartReducer,
    currentList: currentListReducer,
    lists: getListsReducer,
    list: getListDetailsReducer,
    stats: getStatsReducer
});

const middleware = [thunk];

const localState = localStorage.getItem('shoppingCart');
const localList = localStorage.getItem('currentList');
let parsedState, parsedList;

if (localState) {
    parsedState = JSON.parse(localState);
} else {
    parsedState = [];
}

if (localList) {
    parsedList = JSON.parse(localList);
} else {
    parsedList = {};
}

const INITIAL_STATE = {
    cart: {
        cartItems: parsedState
    },
    currentList: {
        currentList: parsedList
    }
}

const store = createStore(
    reducer,
    INITIAL_STATE,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;