import eventReducer from '../../app/reducers/eventReducer'
import * as eventActions from '../../app/actions/eventActions'
import * as userActions from '../../app/actions/userActions'

describe('Event reducer', () =>{
	initialState = {
		events: [],
		displayPinned: false,
	}

	it('should return the initialState', () => {
		expect(eventReducer(undefined, {})).toEqual(initialState)
	})

	it('should return the initialState when user logs out', () =>{
		expect(eventReducer([], userActions.logout())).toEqual(initialState)
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
			events: events,
		}
		expect(eventReducer([], eventActions.eventsListFetchSuccess(events))).toEqual(expectedState)
	})

	it('should handle EVENT_DISPLAY_PINNED', () => {
		let initialState = {
			displayPinned: false
		}

		let displayPinned = true

		let expectedState = {
			displayPinned: true
		}
		expect(eventReducer(initialState, eventActions.eventDisplayPinned(displayPinned))).toEqual(expectedState)
	})

	it('should handle EVENT_TOGGLE_PINNED_STATUS', () => {
		let initialState = {
			events: [
				{
					"id": 1,
					"title": "Vente de Radis",
					"description": "C'est la folie! Ce weekend il y a cuiellette de radis",
					"publishAt": "2017-01-01",
					"BeginAt": "2017-01-01",
					"EndAt": "2017-01-30",
					"pinned": false,
					"farmId": 1,
					"products": []
				},
				{
					"id": 2,
					"title": "Vente de Radis",
					"description": "C'est la folie! Ce weekend il y a cuiellette de radis",
					"publishAt": "2017-01-01",
					"BeginAt": "2017-01-01",
					"EndAt": "2017-01-30",
					"pinned": false,
					"farmId": 1,
					"products": []
				}
			]
		}

		let eventId = 1
		let pinnedStatus = true

		let expectedState = {
			events: [
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
					"title": "Vente de Radis",
					"description": "C'est la folie! Ce weekend il y a cuiellette de radis",
					"publishAt": "2017-01-01",
					"BeginAt": "2017-01-01",
					"EndAt": "2017-01-30",
					"pinned": false,
					"farmId": 1,
					"products": []
				}
			]
		}
		expect(eventReducer(initialState, eventActions.eventTogglePinnedStatus(eventId, pinnedStatus))).toEqual(expectedState)
	})
})
