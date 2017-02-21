import actionTypes from '../config/actionTypes';
import _ from 'lodash'

const initialState = {
	error: null,
	isLoading: false,
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
		case actionTypes.PRODUCTS_LIST_FETCH_REQUEST:
			return {...state, isLoading: true}
		case actionTypes.PRODUCTS_LIST_FETCH_SUCCESS:
			return {
				...state,
				isLoading:false,
				products: action.products
			}
		case actionTypes.PRODUCTS_ERROR:
			return {
				...state,
				error: action.error,
				isLoading: false
			}
		default:
			return state
	}
}
