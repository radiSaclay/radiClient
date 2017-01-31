export function authRequest() {
	return {
		type: 'USER_AUTHENTICATION_REQUEST'
	}
}

export function authSuccess(idToken) {
	return {
		type: 'USER_AUTHENTICATION_SUCCESS',
		idToken
	}
}

export function authError(error) {
	return {
		type: 'USER_AUTHENTICATION_ERROR',
		error
	}
}

export function logout() {
	return {
		type: 'USER_LOGOUT'
	}
}
