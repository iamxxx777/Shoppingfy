import * as actionTypes from "../constants/itemsContants";
import axios from "axios";


export const getItems = () => async (dispatch) => {
    try {
        dispatch({type: actionTypes.GET_ITEMS_REQUEST});

        const { data } = await axios.get("/api/items/");
        
        dispatch({
            type: actionTypes.GET_ITEMS_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: actionTypes.GET_ITEMS_FAIL,
            payload: error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
        });
    }
}

export const getItemDetails = (id) => async (dispatch) => {
    try {
        dispatch({type: actionTypes.GET_ITEM_DETAILS_REQUEST});

        const { data } = await axios.get(`/api/items/${id}`);

        dispatch({
            type: actionTypes.GET_ITEM_DETAILS_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: actionTypes.GET_ITEM_DETAILS_FAIL,
            payload: error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
        });
    }
}


export const newItem = (details) => async (dispatch) => {
    try {
        dispatch({type: actionTypes.NEW_ITEM_REQUEST});

        const { data } = await axios.post("/api/items/", details);

        dispatch({
            type: actionTypes.NEW_ITEM_SUCCESS,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: actionTypes.NEW_ITEM_FAIL,
            payload: error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
        });
    }
};
