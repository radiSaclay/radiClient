export function eventsListFetchRequest() {
	return {
		type: 'EVENTS_LIST_FETCH_REQUEST'
	}
}

export function eventsListFetchSuccess(events) {
	return {
		type: 'EVENTS_LIST_FETCH_SUCCESS',
		events
	}
}

export function eventsListFetchError(error) {
	return {
		type: 'EVENTS_LIST_FETCH_ERROR',
		error
	}
}
