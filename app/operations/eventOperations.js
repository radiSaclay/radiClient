import * as actions from '../actions/eventActions'
import promises from '../config/promises'
import settings from '../config/settings'

export function eventsListFetch (idToken) {
	return dispatch => {
		dispatch(actions.eventsListFetchRequest())
		return promises.getWithToken(settings.urls.EVENTS_URL,idToken)
		.then((events) => {
			dispatch(actions.eventsListFetchSuccess(events.data))
		})
		.catch(error => dispatch(actions.eventsListFetchError(error)))
	}
}
