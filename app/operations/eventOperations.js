import * as actions from '../actions/eventActions'
import promises from '../config/promises'
import settings from '../config/settings'

export function eventTogglePinnedStatus (idToken, eventId, pinnedStatus) {
	return dispatch => {
		let url = (pinnedStatus ? settings.urls.EVENTS_UNPIN_URL : settings.urls.EVENTS_PIN_URL) + eventId
		return promises.postWithToken(url, idToken)
		.then((response) => {
			dispatch(actions.eventTogglePinnedStatus(eventId, !pinnedStatus))
		})
		.catch((error) => dispatch(actions.eventError(error.response.data.msg, error.response.status)))
	}
}

export function eventsListFetch (idToken) {
	return dispatch => {
		dispatch(actions.eventsListFetchRequest())
		return promises.getWithToken(settings.urls.EVENTS_URL_DETAILED,idToken)
		.then((events) => {
			dispatch(actions.eventsListFetchSuccess(events.data))
		})
		.catch(error => dispatch(actions.eventError(error.response.data.msg, error.response.status)))
	}
}
