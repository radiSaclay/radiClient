import actionTypes from '../config/actionTypes';

const initialState = {
	error: null,
	isLoading: false,
	products: []
}

export default function products(state = initialState, action) {
	switch (action.type) {
		case actionTypes.PRODUCTS_LIST_FETCH_REQUEST:
			return {...state, isLoading: true}
		case actionTypes.PRODUCTS_LIST_FETCH_SUCCESS:
			return {
				...state,
				isLoading:false,
				products: action.products
			}
		case actionTypes.PRODUCTS_LIST_FETCH_ERROR:
			return {
				...state,
				error: action.error,
				isLoading: false
			}
		default:
			return state
	}
}
