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
	const idToken = 'bqdiuqbw9udb19b129dub1'
	const requestHeaders = {'Authorization': idToken}
	const url = settings.urls.EVENTS_URL

	afterEach(() => {
		nock.cleanAll()
	})

	it('creates EVENTS_LIST_FETCH_SUCCESS when fetching events list done', () => {
		let store = mockStore({events: [], error: null, isLoading: false})
		let expectedActions = [
			eventActions.eventsListFetchRequest(),
			eventActions.eventsListFetchSuccess(events)
		]

		nock(url, requestHeaders)
			.get('/')
			.reply(200, events)

		return store.dispatch(operations.eventsListFetch(idToken))
			.then(() => {
				expect(store.getActions()).toEqual(expectedActions)
			})
	})


	it('creates EVENTS_LIST_FETCH_ERROR when fetching events list fails', () => {
		let responseError = new Error('something awful happened')
		let store = mockStore({events: [], error: null, isLoading: false})
		let expectedActions = [
			eventActions.eventsListFetchRequest(),
			eventActions.eventsListFetchError(responseError)
		]

		nock(url, requestHeaders)
			.get('/')
			.replyWithError('something awful happened')

		return store.dispatch(operations.eventsListFetch(idToken))
			.then(() => {
				expect(store.getActions()).toEqual(expectedActions)
			})
	})

})