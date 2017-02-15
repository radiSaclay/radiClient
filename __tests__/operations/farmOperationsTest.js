import nock from 'nock'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import * as farmActions from '../../app/actions/farmActions'
import * as operations from '../../app/operations/farmOperations'
import settings from '../../app/config/settings'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('Farms list fetch operations', () => {

	const farms = [
		{
			"id": 1,
			"name": "Farm 1",
			"website": "www.farm.com",
			"address": "123 rue de la ferme, 75000 Palaiseau",
			"phone": "+33123456789",
			"email": "farmer1@test.com",
			"subscribed": false,
			"ownerId": 1,
			"products": [1, 2, 3]
		},
		{
			"id": 2,
			"name": "Farm 2",
			"website": "www.farm.com",
			"address": "456 rue de la ferme, 75000 Palaiseau",
			"phone": "+33123456789",
			"email": "farmer2@test.com",
			"subscribed": true,
			"ownerId": 2,
			"products": [1, 2, 3]
		},
	]
	const idToken = 'bqdiuqbw9udb19b129dub1'
	const requestHeaders = {'Authorization': idToken}
	const url = settings.urls.FARMS_URL

	afterEach(() => {
		nock.cleanAll()
	})

	it('creates FARMS_LIST_FETCH_SUCCESS when fetching farms list done', () => {
		let store = mockStore({farms: [], error: null, isLoading: false})
		let expectedActions = [
			farmActions.farmsListFetchRequest(),
			farmActions.farmsListFetchSuccess(farms)
		]

		nock(url, requestHeaders)
		.get('/')
		.reply(200, farms)

		return store.dispatch(operations.farmsListFetch(idToken))
		.then(() => {
			expect(store.getActions()).toEqual(expectedActions)
		})
	})


	it('creates FARMS_ERROR when fetching farms list fails', () => {
		let responseError = new Error('something awful happened')
		let store = mockStore({farms: [], error: null, isLoading: false})
		let expectedActions = [
			farmActions.farmsListFetchRequest(),
			farmActions.farmsError(responseError)
		]

		nock(url, requestHeaders)
		.get('/')
		.replyWithError('something awful happened')

		return store.dispatch(operations.farmsListFetch(idToken))
		.then(() => {
			expect(store.getActions()).toEqual(expectedActions)
		})
	})

})
