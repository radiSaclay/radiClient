import * as actions from '../actions/eventActions'
import promises from '../config/promises'
import settings from '../config/settings'

export function eventTogglePinnedStatus (idToken, eventId, pinnedStatus) {
	return dispatch => {
		let url = (pinnedStatus ? settings.urls.EVENTS_UNPIN_URL : settings.urls.EVENTS_PIN_URL) + eventId
		promises.postWithToken(url, idToken)
		.then((response) => {
			dispatch(actions.eventTogglePinnedStatus(eventId, !pinnedStatus))
		})
		.catch((error) => {
			// TODO: dispatch error when store will be refactored
			console.error(error);
		})
	}
}

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
