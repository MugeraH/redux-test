import { combineReducers } from "redux";
import userReducer from "./userReducer";
import userDetailReducer from "./userDetailReducer";

const rootReducer = combineReducers({
	users: userReducer,
	user: userDetailReducer,
});

export default rootReducer;
