import actionTypes from '../config/actionTypes'
import _ from 'lodash'

const initialState = {
	events: [],
	displayPinned: false,
}

export default function events(state = initialState, action) {
	switch (action.type) {
		case actionTypes.EVENT_DISPLAY_PINNED:
			return {
				...state,
				displayPinned: action.displayPinned,
			}
		case actionTypes.EVENT_TOGGLE_PINNED_STATUS:
			let events = Object.assign([], state.events)
			let event = _.find(events, (event) => { return event.id === action.eventId })
			event.pinned = action.pinnedStatus
			return {
				...state,
				events
			}
		case actionTypes.EVENTS_LIST_FETCH_SUCCESS:
			return {
				...state,
				events: action.events,
			}
		case actionTypes.USER_LOGOUT:
			return initialState;
		default:
			return state
	}
}
