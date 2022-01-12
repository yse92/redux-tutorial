import counterReducer from "./counterReducer";
import auth from "./authReducer";
import { combineReducers } from "redux";
/*
    STORE
*/
const allReducers = combineReducers({
    counterReducer,
    auth,

});
export default allReducers;
