import * as actions from '../actions/farmActions'
import promises from '../config/promises'
import settings from '../config/settings'

export function farmToggleSubscribedStatus (idToken, farmId, subscribedStatus) {
	return dispatch => {
		let url = (subscribedStatus ? settings.urls.FARMS_UNSUBSCRIBE_URL : settings.urls.FARMS_SUBSCRIBE_URL) + farmId
		return promises.postWithToken(url, idToken)
		.then((response) => {
			dispatch(actions.farmToggleSubscribedStatus(farmId, !subscribedStatus))
		})
		.catch((error) => dispatch(actions.farmError(error.response.data.msg, error.response.status)))
	}
}

export function farmsListFetch (idToken) {
	return dispatch => {
		dispatch(actions.farmsListFetchRequest())
		return promises.getWithToken(settings.urls.FARMS_URL,idToken)
		.then((farms) => {
			dispatch(actions.farmsListFetchSuccess(farms.data))
		})
		.catch(error => dispatch(actions.farmError(error.response.data.msg, error.response.status)))
	}
}
