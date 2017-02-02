import actionTypes from '../../app/config/actionTypes';
import * as productActions from '../../app/actions/productActions';

describe('Get products from the API', () => {
	it('should create an action when fetch products list request fires', () => {
		let expectedAction = {
			type: actionTypes.PRODUCTS_LIST_FETCH_REQUEST,
		}
		expect(productActions.productsListFetchRequest()).toEqual(expectedAction)
	})

	it('should create an action when fetch products list succeeds', () => {
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
		let expectedAction = {
			type: actionTypes.PRODUCTS_LIST_FETCH_SUCCESS,
			products
		}
		expect(productActions.productsListFetchSuccess(products)).toEqual(expectedAction)
	})

	it('should create an action when fetch products list raises an error', () => {
		let error = new Error()
		let expectedAction = {
			type: actionTypes.PRODUCTS_LIST_FETCH_ERROR,
			error
		}
		expect(productActions.productsListFetchError(error)).toEqual(expectedAction)
	})
})
