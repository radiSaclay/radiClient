import actionTypes from '../config/actionTypes';

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
