import actionTypes from '../config/actionTypes';

export function eventTogglePinnedStatus(eventId, pinnedStatus) {
	return {
		type: actionTypes.EVENT_TOGGLE_PINNED_STATUS,
		eventId,
		pinnedStatus
	}
}

export function eventsListFetchRequest() {
	return {
		type: actionTypes.EVENTS_LIST_FETCH_REQUEST
	}
}

export function eventsListFetchSuccess(events) {
	return {
		type: actionTypes.EVENTS_LIST_FETCH_SUCCESS,
		events
	}
}

export function eventsListFetchError(error) {
	return {
		type: actionTypes.EVENTS_LIST_FETCH_ERROR,
		error
	}
}
