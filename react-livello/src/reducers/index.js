import {combineReducers} from "redux";
import {wearList} from "./info";
import {countWears} from "./countWears";

const rootReducer =  combineReducers({
    wearList: wearList,
    countWears: countWears
});

export default rootReducer;