import * as actions from '../actions/userActions'
import promises from '../config/promises'

export function userAuth (url, body) {
	return dispatch => {
		dispatch(actions.authRequest())
		return promises.post(url,body)
		.then((response) => {
			dispatch(actions.authSuccess(response.data.token))
		})
		.catch(error => dispatch(actions.authError(error.response.data.msg, error.response.status)))
	}
}

export function userFacebookAuth (url, token) {
	return dispatch => {
		dispatch(actions.authRequest())
		return promises.postWithToken(url,token)
		.then((response) => {
			dispatch(actions.authSuccess(response.data.token))
		})
		.catch(error => {
			dispatch(actions.authError(error.response.data.msg, error.response.status))
		})
	}
}

export const userLogout = actions.logout;
