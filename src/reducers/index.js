import { combineReducers } from "redux";
import selectServiceReducer from "./selectedService";

const allReducers = combineReducers({
    selectService: selectServiceReducer
})

export default allReducers;