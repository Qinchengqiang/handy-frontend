import { combineReducers } from "redux";

import { authentication } from "./authReducer";
import { registration } from "./regReducer";
// import { users } from './users.reducer';
import { alert } from "./alertReducer";
import cartReducer from './cartReducer'

const rootReducer = combineReducers({
	authentication,
	registration,
	//   users,
	alert,
	cartReducer,
});

export default rootReducer;
