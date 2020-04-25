import { combineReducers } from "redux";

import { authentication } from "./authReducer";
import { registration } from "./regReducer";
// import { users } from './users.reducer';
import { alert } from "./alertReducer";
import { cart } from "./cartReducer";
import bookingReducer from "./bookingReducer";

const rootReducer = combineReducers({
  authentication,
  registration,
  //   users,
  alert,
  cart,
  bookingReducer,
});

export default rootReducer;
