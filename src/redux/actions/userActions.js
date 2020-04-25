import { userConstants } from "../constants/userConstants";
import { userService } from "../services/userServices";
import { alertActions } from "../actions/alertActions";
import { history } from "../helpers/history";
import Axios from "axios";

export const userActions = {
  login,
  logout,
  register,
  // getAll,
  // delete: _delete
};

function login(username, password) {
  const logInfo = {
    email: username,
    password: password,
  };
  return (dispatch) => {
    dispatch(request({ username }));
    Axios.post("http://localhost:4000/api/login", logInfo)

      .then((res) => {
        dispatch(success(res.data.id));
        history.push("/");
        console.log(res.data);
      })
      .catch((err) => {
        dispatch(failure(err));
        dispatch(alertActions.error(err.response.data.message));

        console.log(err.response.data.message);
      });
  };
  function request(user) {
    return { type: userConstants.LOGIN_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.LOGIN_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error };
  }
}

function logout() {
  localStorage.removeItem("user");
  return { type: userConstants.LOGOUT };
}

function register(user) {
  return (dispatch) => {
    dispatch(request(user));
    Axios.post("/api/user", user)
      .then((res) => {
        dispatch(success());
        history.push("/login");
        dispatch(alertActions.success("Registration successful"));
      })

      .catch((err) => {
        console.log(err);
        dispatch(failure(err));
        dispatch(alertActions.error(err.response.data.message));
      });
  };

  function request(user) {
    return { type: userConstants.REGISTER_REQUEST, user };
  }
  function success(user) {
    return { type: userConstants.REGISTER_SUCCESS, user };
  }
  function failure(error) {
    return { type: userConstants.REGISTER_FAILURE, error };
  }
}

// function getAll() {
// 	return dispatch => {
// 		dispatch(request());

// 		userService.getAll().then(
// 			users => dispatch(success(users)),
// 			error => dispatch(failure(error))
// 		);
// 	};

// 	function request() {
// 		return { type: userConstants.GETALL_REQUEST };
// 	}
// 	function success(users) {
// 		return { type: userConstants.GETALL_SUCCESS, users };
// 	}
// 	function failure(error) {
// 		return { type: userConstants.GETALL_FAILURE, error };
// 	}
// }

// prefixed function name with underscore because delete is a reserved word in javascript
// function _delete(id) {
// 	return dispatch => {
// 		dispatch(request(id));

// 		userService.delete(id).then(
// 			user => {
// 				dispatch(success(id));
// 			},
// 			error => {
// 				dispatch(failure(id, error));
// 			}
// 		);
// 	};

// 	function request(id) {
// 		return { type: userConstants.DELETE_REQUEST, id };
// 	}
// 	function success(id) {
// 		return { type: userConstants.DELETE_SUCCESS, id };
// 	}
// 	function failure(id, error) {
// 		return { type: userConstants.DELETE_FAILURE, id, error };
// 	}
// }
