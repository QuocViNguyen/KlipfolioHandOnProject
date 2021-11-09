import { combineReducers } from "redux";
import selectServiceReducer from "./selectedService";
import relatedDataSourceReducer from "./relatedDataSource";

const allReducers = combineReducers({
    selectService: selectServiceReducer,
    dataSource: relatedDataSourceReducer
})

export default allReducers;