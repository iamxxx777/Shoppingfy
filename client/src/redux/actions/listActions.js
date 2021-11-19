import * as actionTypes from "../constants/listsConstants";
import axios from "axios";


export const getLists = () => async (dispatch) => {
    try {
        dispatch({type: actionTypes.GET_LISTS_REQUEST});

        const { data } = await axios.get("/api/lists/");

        dispatch({
            type: actionTypes.GET_LISTS_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: actionTypes.GET_LISTS_FAIL,
            payload: error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
        });
    }
}

export const getListDetails = (id) => async (dispatch) => {
    try {
        dispatch({type: actionTypes.GET_LIST_DETAILS_REQUEST});

        const { data } = await axios.get(`/api/lists/${id}`);

        dispatch({
            type: actionTypes.GET_LIST_DETAILS_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: actionTypes.GET_LIST_DETAILS_FAIL,
            payload: error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
        });
    }
}


export const currentList = (name) => async (dispatch, getState) => {
    const items = getState().cart.cartItems;

    const details = {
        name,
        items
    }
    
    try {
        dispatch({type: actionTypes.NEW_LIST_REQUEST});

        const { data } = await axios.post("/api/lists/", details);

        dispatch({
            type: actionTypes.NEW_LIST_SUCCESS,
            payload: data
        });

        localStorage.setItem('currentList', JSON.stringify(getState().currentList.currentList));
    } catch (error) {
        dispatch({
            type: actionTypes.NEW_LIST_FAIL,
            payload: error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
        });
    }
};


export const cancelCurrentList = () => async (dispatch, getState) => {
    const { _id, name } = getState().currentList.currentList;

    const details = {
        _id,
        name,
        cancelled: true
    }

    try {
        dispatch({type: actionTypes.CANCEL_LIST_REQUEST});

        await axios.put("/api/lists/", details);

        dispatch({
            type: actionTypes.CANCEL_LIST_SUCCESS,
            payload: ""
        });
        
        localStorage.removeItem('shoppingCart');
        localStorage.removeItem('currentList');
    } catch (error) {
        dispatch({
            type: actionTypes.CANCEL_LIST_FAIL,
            payload: error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
        });
    }
}



export const completeCurrentList = () => async (dispatch, getState) => {
    const { _id, name } = getState().currentList.currentList;

    const details = {
        _id,
        name,
        completed: true
    }

    try {
        dispatch({type: actionTypes.COMPLETE_LIST_REQUEST});

        await axios.put("/api/lists/", details);

        dispatch({
            type: actionTypes.COMPLETE_LIST_SUCCESS,
            payload: ""
        });
        
        localStorage.removeItem('shoppingCart');
        localStorage.removeItem('currentList');
    } catch (error) {
        dispatch({
            type: actionTypes.COMPLETE_LIST_FAIL,
            payload: error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
        });
    }
}

export const updateCurrentList = (name) => async (dispatch, getState) => {
    const items = getState().cart.cartItems;
    const { _id } = getState().currentList.currentList;

    const details = {
        _id,
        name,
        items
    }
    
    try {
        dispatch({type: actionTypes.NEW_LIST_REQUEST});

        const { data } = await axios.put("/api/lists/", details);

        dispatch({
            type: actionTypes.NEW_LIST_SUCCESS,
            payload: data
        });

        localStorage.setItem('currentList', JSON.stringify(getState().currentList.currentList));

    } catch (error) {
        dispatch({
            type: actionTypes.NEW_LIST_FAIL,
            payload: error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
        });
    }
};

