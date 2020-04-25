import { userConstants } from "../constants/userConstants";

// let user = localStorage.getItem("user");
const initialState = {
	isAuthenticated: false,
	user: {},
};

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
		case userConstants.SET_CURRENT_USER:
			return {
				...state,
				isAuthenticated: true,
				user: action.payload,
			};
		case userConstants.LOGOUT:
			return {
				loggedIn: false,
			};
		default:
			return state;
	}
}
