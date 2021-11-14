import * as actionTypes from "../constants/statsConstants";
import axios from "axios";

export const getStats = () => async (dispatch) => {
    try {
        dispatch({type: actionTypes.GET_STATS_REQUEST});

        const { data } = await axios.get("/api/stats/");

        dispatch({
            type: actionTypes.GET_STATS_SUCCESS,
            payload: data
        });
    } catch (error) {
        dispatch({
            type: actionTypes.GET_STATS_FAIL,
            payload: error.response && error.response.data.message
                        ? error.response.data.message
                        : error.message,
        });
    }
}