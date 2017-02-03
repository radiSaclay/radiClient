import * as actions from '../actions/userActions'
import promises from '../config/promises'

export function userAuth (url, body) {
	return dispatch => {
		dispatch(actions.authRequest())
		return promises.post(url,body)
		.then((responseJson) => {
			dispatch(actions.authSuccess(responseJson.data.token))
		})
		.catch(error => dispatch(actions.authError(error)))
	}
}

export const userLogout = actions.logout;
