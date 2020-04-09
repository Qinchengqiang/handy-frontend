import { combineReducers } from "redux";

import { authentication } from "./authReducer";
import { registration } from "./regReducer";
import products from './productReducer'
// import { users } from './users.reducer';
// import { alert } from './alert.reducer';

const rootReducer = combineReducers({
	authentication,
	registration,
	//   users,
	//   alert
	products,
});

export default rootReducer;
