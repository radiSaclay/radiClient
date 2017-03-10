import nock from 'nock'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import * as eventActions from '../../app/actions/eventActions'
import * as operations from '../../app/operations/eventOperations'
import settings from '../../app/config/settings'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('Events list fetch operations', () => {

	const events = [
		{
			"id": 1,
			"title": "Vente de Radis",
			"description": "C'est la folie! Ce weekend il y a cuiellette de radis",
			"publishAt": "2017-01-01",
			"BeginAt": "2017-01-01",
			"EndAt": "2017-01-30",
			"pinned": true,
			"farm": {
				"id": 1,
				"name": "ferme 1"
			},
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
			"farm": {
				"id": 2,
				"name": "ferme 2"
			},
			"products": []
		},
	]
	const idToken = 'bqdiuqbw9udb19b129dub1'
	const requestHeaders = {'Authorization': idToken}
	const url = settings.urls.EVENTS_URL

	afterEach(() => {
		nock.cleanAll()
	})

	it('creates EVENTS_LIST_FETCH_SUCCESS when fetching events list done', () => {
		let store = mockStore({events: []})
		let expectedActions = [
			eventActions.eventsListFetchRequest(),
			eventActions.eventsListFetchSuccess(events)
		]

		nock(url, requestHeaders)
			.get('/?embedded=1')
			.reply(200, events)

		return store.dispatch(operations.eventsListFetch(idToken))
			.then(() => {
				expect(store.getActions()).toEqual(expectedActions)
			})
	})


	it('creates EVENT_ERROR when fetching events list fails', () => {
		let errorMessage = 'something awful happened'
		let errorStatus = 401
		let store = mockStore({events: []})
		let expectedActions = [
			eventActions.eventsListFetchRequest(),
			eventActions.eventError(errorMessage, errorStatus)
		]

		nock(url, requestHeaders)
			.get('/?embedded=1')
			.reply(errorStatus, {msg: errorMessage})

		return store.dispatch(operations.eventsListFetch(idToken))
			.then(() => {
				expect(store.getActions()).toEqual(expectedActions)
			})
	})

})

describe('Event toggle pinned status operation', () => {

	const idToken = 'bqdiuqbw9udb19b129dub1'
	const requestHeaders = {'Authorization': idToken}
	const eventId = 1
	const pinnedStatus = false
	const url = settings.urls.EVENTS_PIN_URL + eventId

	afterEach(() => {
		nock.cleanAll()
	})

	it('creates EVENT_TOGGLE_PINNED_STATUS when toggle pinned status succeeds', () => {
		let store = mockStore({
			events: [{
				"id": 1,
				"title": "Vente de Radis",
				"description": "C'est la folie! Ce weekend il y a cuiellette de radis",
				"publishAt": "2017-01-01",
				"BeginAt": "2017-01-01",
				"EndAt": "2017-01-30",
				"pinned": true,
				"farmId": 1,
				"products": []
			}]
		})
		let expectedActions = [
			eventActions.eventTogglePinnedStatus(eventId, !pinnedStatus)
		]

		nock(url, requestHeaders)
		.post('')
		.reply(200)

		return store.dispatch(operations.eventTogglePinnedStatus(idToken, eventId, pinnedStatus))
		.then(() => expect(store.getActions()).toEqual(expectedActions))
	})

	it('creates EVENT_TOGGLE_PINNED_STATUS when toggle pinned status fails', () => {
		let errorMessage = 'something awful happened'
		let errorStatus = 401
		let store = mockStore({
			events: [{
				"id": 1,
				"title": "Vente de Radis",
				"description": "C'est la folie! Ce weekend il y a cuiellette de radis",
				"publishAt": "2017-01-01",
				"BeginAt": "2017-01-01",
				"EndAt": "2017-01-30",
				"pinned": true,
				"farmId": 1,
				"products": []
			}],
			error: null,
			isLoading: false
		})
		let expectedActions = [eventActions.eventError(errorMessage,errorStatus)]

		nock(url, requestHeaders)
		.post('')
		.reply(errorStatus, {msg: errorMessage})

		return store.dispatch(operations.eventTogglePinnedStatus(idToken, eventId, pinnedStatus))
		.then(() => expect(store.getActions()).toEqual(expectedActions))
	})
})
