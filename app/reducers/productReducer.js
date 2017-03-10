import actionTypes from '../config/actionTypes';
import _ from 'lodash'

const initialState = {
	products: []
}

export default function products(state = initialState, action) {
	switch (action.type) {
		case actionTypes.PRODUCT_TOGGLE_SUBSCRIBED_STATUS:
			let products = Object.assign([], state.products)
			let product = _.find(products, (product) => { return product.id === action.productId })
			product.subscribed = action.subscribedStatus
			return {
				...state,
				products
			}
		case actionTypes.PRODUCTS_LIST_FETCH_SUCCESS:
			return {
				...state,
				products: action.products
			}
		case actionTypes.USER_LOGOUT:
			return initialState;
		default:
			return state
	}
}
