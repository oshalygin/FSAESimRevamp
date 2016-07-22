import { combineReducers } from "redux";
import engines from "./engineReducer";
const rootReducer = combineReducers({
    engines
});

export default rootReducer;