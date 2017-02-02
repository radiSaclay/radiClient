import nock from 'nock'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import * as productActions from '../../app/actions/productActions'
import * as operations from '../../app/operations/productOperations'
import settings from '../../app/config/settings'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('Products list fetch operations', () => {

	const products = [
		{
			"id": 1,
			"name": "radis",
			"subscribed": false,
			"farms": [1, 2],
			"subproducts": [3, 4],
			"ancestors": [1],
		},
		{
			"id": 2,
			"name": "poulet",
			"subscribed": true,
			"farms": [1, 2],
			"subproducts": [3, 4],
			"ancestors": [1],
		},
	]
	const idToken = 'bqdiuqbw9udb19b129dub1'
	const requestHeaders = {'Authorization': idToken}
	const url = settings.urls.PRODUCTS_URL

	afterEach(() => {
		nock.cleanAll()
	})

	it('creates PRODUCTS_LIST_FETCH_SUCCESS when fetching products list done', () => {
		let store = mockStore({products: [], error: null, isLoading: false})
		let expectedActions = [
			productActions.productsListFetchRequest(),
			productActions.productsListFetchSuccess(products)
		]

		nock(url, requestHeaders)
		.get('/')
		.reply(200, products)

		return store.dispatch(operations.productsListFetch(idToken))
		.then(() => {
			expect(store.getActions()).toEqual(expectedActions)
		})
	})


	it('creates PRODUCTS_LIST_FETCH_ERROR when fetching products list fails', () => {
		let responseError = new Error('something awful happened')
		let store = mockStore({products: [], error: null, isLoading: false})
		let expectedActions = [
			productActions.productsListFetchRequest(),
			productActions.productsListFetchError(responseError)
		]

		nock(url, requestHeaders)
		.get('/')
		.replyWithError('something awful happened')

		return store.dispatch(operations.productsListFetch(idToken))
		.then(() => {
			expect(store.getActions()).toEqual(expectedActions)
		})
	})

})
