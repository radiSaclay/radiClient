import * as eventActions from '../../app/actions/eventActions'

describe('Get events from the API', () => {
	it('should create an action when fetch events list request fires', () => {
		let expectedAction = {
			type: 'EVENTS_LIST_FETCH_REQUEST',
		}
		expect(eventActions.eventsListFetchRequest()).toEqual(expectedAction)
	})

	it('should create an action when fetch events list succeeds', () => {
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
		let expectedAction = {
			type: 'EVENTS_LIST_FETCH_SUCCESS',
			events
		}
		expect(eventActions.eventsListFetchSuccess(events)).toEqual(expectedAction)
	})

	it('should create an action when fetch events list raises an error', () => {
		let error = new Error()
		let expectedAction = {
			type: 'EVENTS_LIST_FETCH_ERROR',
			error
		}
		expect(eventActions.eventsListFetchError(error)).toEqual(expectedAction)
	})
})
