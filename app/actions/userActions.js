import actionTypes from '../config/actionTypes';

export function authRequest() {
	return {
		type: actionTypes.USER_AUTHENTICATION_REQUEST
	}
}

export function authSuccess(idToken) {
	return {
		type: actionTypes.USER_AUTHENTICATION_SUCCESS,
		idToken
	}
}

export function authError(error) {
	return {
		type: actionTypes.USER_AUTHENTICATION_ERROR,
		error
	}
}

export function logout() {
	return {
		type: actionTypes.USER_LOGOUT
	}
}
