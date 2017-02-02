import actionTypes from '../config/actionTypes';

export function productsListFetchRequest() {
	return {
		type: actionTypes.PRODUCTS_LIST_FETCH_REQUEST
	}
}

export function productsListFetchSuccess(products) {
	return {
		type: actionTypes.PRODUCTS_LIST_FETCH_SUCCESS,
		products
	}
}

export function productsListFetchError(error) {
	return {
		type: actionTypes.PRODUCTS_LIST_FETCH_ERROR,
		error
	}
}
