import * as actionTypes from "../actions/actionTypes";
import initialState from "./initialState";

export default function engineReducer(state = initialState.engines, action) {

    switch (action.type) {
        case actionTypes.LOAD_ENGINES_SUCCESS:
            return action.engines;
        default:
            return state;
    }
}