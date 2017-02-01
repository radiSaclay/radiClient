import eventReducer from '../../app/reducers/eventReducer'
import * as eventActions from '../../app/actions/eventActions'

describe('Event reducer', () =>{
	it('should return the initialState', () => {
		let expectedState = {
			events: [],
			error: null,
			isLoading: false
		}
		expect(eventReducer(undefined, {})).toEqual(expectedState)
	})

	it('should handle EVENTS_LIST_FETCH_REQUEST', () => {
		let expectedState = {
			events: [],
			error: null,
			isLoading: true
		}
		expect(eventReducer(undefined, eventActions.eventsListFetchRequest())).toEqual(expectedState)
	})

	it('should handle EVENTS_LIST_FETCH_SUCCESS', () => {
		let events = [
			{
				"id": 1,
				"title": "Vente de Radis",
				"description": "C'est la folie! Ce weekend il y a cuiellette de radis",
				"publishAt": "2017-01-01",
				"BeginAt": "2017-01-01",
				"EndAt": "2017-01-30",
				"pinned": true,
				"farmId": 1,
				"products": []
			},
			{
				"id": 2,
				"title": "Vente de Tomates",
				"description": "C'est la folie! Ce weekend il y a cuiellette de tomates",
				"publishAt": "2017-01-01",
				"BeginAt": "2017-01-01",
				"EndAt": "2017-01-30",
				"pinned": false,
				"farmId": 2,
				"products": []
			},
		]
		let expectedState = {
			error: null,
			events: events,
			isLoading: false
		}
		expect(eventReducer(undefined, eventActions.eventsListFetchSuccess(events))).toEqual(expectedState)
	})

	it('should handle EVENTS_LIST_FETCH_ERROR', () => {
		let error = new Error()
		let expectedState = {
			error: error,
			events: [],
			isLoading: false
		}
		expect(eventReducer(undefined, eventActions.eventsListFetchError(error))).toEqual(expectedState)
	})

})
