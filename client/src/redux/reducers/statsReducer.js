import * as actionTypes from "../constants/statsConstants";

export const getStatsReducer = (state = { stats: [] }, action) => {
    switch(action.type) {
        case actionTypes.GET_STATS_REQUEST:
            return {
                loading: true,
                stats: [],
            }
        case actionTypes.GET_STATS_SUCCESS:
            return {
                loading: false,
                stats: action.payload,
            }
        case actionTypes.GET_STATS_FAIL:
            return {
                loading: false,
                error: action.payload,
            }
        default:
            return state;
    }
};