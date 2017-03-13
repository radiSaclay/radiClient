import productReducer from '../../app/reducers/productReducer'
import * as productActions from '../../app/actions/productActions'
import * as userActions from '../../app/actions/userActions'

describe('Product reducer', () =>{
	initialState = {
		products: [],
	}

	it('should return the initialState', () => {
		expect(productReducer(undefined, {})).toEqual(initialState)
	})

	it('should return the initialState when user logs out', () =>{
		expect(productReducer([], userActions.logout())).toEqual(initialState)
	})
	it('should handle PRODUCT_TOGGLE_SUBSCRIBED_STATUS', () => {
		let initialState = {
			products: [
				{
					"id": 1,
					"name": "radis",
					"subscribed": false,
					"farms": [1, 2],
					"subproducts": [3, 4],
					"ancestors": [1],
				}
			]
		}

		let productId = 1
		let subscribedStatus = true

		let expectedState = {
			products: [
				{
					"id": 1,
					"name": "radis",
					"subscribed": true,
					"farms": [1, 2],
					"subproducts": [3, 4],
					"ancestors": [1],
				}
			]
		}
		expect(productReducer(initialState, productActions.productToggleSubscribedStatus(productId, subscribedStatus))).toEqual(expectedState)
	})

	it('should handle PRODUCTS_LIST_FETCH_SUCCESS', () => {
		let products = [
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
		let expectedState = {
			products: products,
		}
		expect(productReducer([], productActions.productsListFetchSuccess(products))).toEqual(expectedState)
	})

	it('should handle PRODUCT_TOGGLE_SUBSCRIBED_STATUS', () => {
		let initialState = {
			products: [
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
					"subscribed": false,
					"farms": [1, 2],
					"subproducts": [3, 4],
					"ancestors": [1],
				}
			]
		}

		let productId = 1
		let subscribedStatus = true

		let expectedState = {
			products: [
				{
					"id": 1,
					"name": "radis",
					"subscribed": true,
					"farms": [1, 2],
					"subproducts": [3, 4],
					"ancestors": [1],
				},
				{
					"id": 2,
					"name": "poulet",
					"subscribed": false,
					"farms": [1, 2],
					"subproducts": [3, 4],
					"ancestors": [1],
				}
			]
		}
		expect(productReducer(initialState, productActions.productToggleSubscribedStatus(productId, subscribedStatus))).toEqual(expectedState)
	})
})
