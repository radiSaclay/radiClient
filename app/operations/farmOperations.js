import * as actions from '../actions/farmActions'
import promises from '../config/promises'
import settings from '../config/settings'

export function farmsListFetch (idToken) {
	return dispatch => {
		dispatch(actions.farmsListFetchRequest())
		return promises.getWithToken(settings.urls.FARMS_URL,idToken)
		.then((farms) => {
			dispatch(actions.farmsListFetchSuccess(farms.data))
		})
		.catch(error => dispatch(actions.farmsListFetchError(error)))
	}
}
