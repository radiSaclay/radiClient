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
		let store = mockStore({products: []})
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


	it('creates PRODUCT_ERROR when fetching products list fails', () => {
		let store = mockStore({products: []})
		let errorMessage = 'something awful happened'
		let errorStatus = 401
		let expectedActions = [
			productActions.productsListFetchRequest(),
			productActions.productError(errorMessage, errorStatus)
		]

		nock(url, requestHeaders)
		.get('/')
		.reply(errorStatus, {msg: errorMessage})

		return store.dispatch(operations.productsListFetch(idToken))
		.then(() => {
			expect(store.getActions()).toEqual(expectedActions)
		})
	})

})

describe('Product toggle subscribed status operation', () => {

	const idToken = 'bqdiuqbw9udb19b129dub1'
	const requestHeaders = {'Authorization': idToken}
	const productId = 1
	const subscribedStatus = false
	const url = settings.urls.PRODUCTS_SUBSCRIBE_URL + productId

	afterEach(() => {
		nock.cleanAll()
	})

	it('creates PRODUCT_TOGGLE_SUBSCRIBED_STATUS when toggle subscribed status succeeds', () => {
		let store = mockStore({
			products: [{
				"id": 1,
				"name": "radis",
				"subscribed": false,
				"farms": [1, 2],
				"subproducts": [3, 4],
				"ancestors": [1],
			}],
		})
		let expectedActions = [productActions.productToggleSubscribedStatus(productId, !subscribedStatus)]

		nock(url, requestHeaders)
		.post('')
		.reply(200)

		return store.dispatch(operations.productToggleSubscribedStatus(idToken, productId, subscribedStatus))
		.then(() => expect(store.getActions()).toEqual(expectedActions))
	})

	it('creates PRODUCT_TOGGLE_SUBSCRIBED_STATUS when toggle subscribed status fails', () => {
		let store = mockStore({
			products: [{
				"id": 1,
				"name": "radis",
				"subscribed": false,
				"farms": [1, 2],
				"subproducts": [3, 4],
				"ancestors": [1],
			}],
		})
		let errorMessage = 'something awful happened'
		let errorStatus = 401
		let expectedActions = [productActions.productError(errorMessage, errorStatus)]

		nock(url, requestHeaders)
		.post('')
		.reply(errorStatus, {msg: errorMessage})

		return store.dispatch(operations.productToggleSubscribedStatus(idToken, productId, subscribedStatus))
		.then(() => expect(store.getActions()).toEqual(expectedActions))
	})
})
