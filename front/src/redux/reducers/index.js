import { combineReducers } from "redux";
import { userReducer } from "./userReducer";
const reducers = combineReducers({

  allusers:userReducer

});
export default reducers;
