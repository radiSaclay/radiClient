const initialState = {
	events: [],
	error: null,
	isLoading: false
}

export default function events(state = initialState, action) {
	switch (action.type) {
		case 'EVENTS_LIST_FETCH_REQUEST':
			return {...state, isLoading: true}
		case 'EVENTS_LIST_FETCH_SUCCESS':
			return {
				...state,
				events: action.events,
				isLoading:false
			}
		case 'EVENTS_LIST_FETCH_ERROR':
			return {
				...state,
				error: action.error,
				isLoading: false
			}
		default:
			return state
	}
}
