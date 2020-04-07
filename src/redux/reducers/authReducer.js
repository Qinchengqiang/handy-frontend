import { userConstants } from "../constants/userConstants";

let user = JSON.parse(localStorage.getItem("user"));
const initialState = user ? { loggedIn: true, user } : { fail: true };

export function authentication(state = initialState, action) {
	switch (action.type) {
		case userConstants.LOGIN_REQUEST:
			return {
				loggingIn: true,
				user: action.user,
			};
		case userConstants.LOGIN_SUCCESS:
			return {
				loggedIn: true,
				user: action.user,
			};
		case userConstants.LOGIN_FAILURE:
			return {
				fail: true,
				error: "Username or password is incorrect!",
			};
		case userConstants.LOGOUT:
			return {
				loggedIn: false,
			};
		default:
			return state;
	}
}
