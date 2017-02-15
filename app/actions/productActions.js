import actionTypes from '../config/actionTypes';

export function productToggleSubscribedStatus(productId, subscribedStatus) {
	return {
		type: actionTypes.PRODUCT_TOGGLE_SUBSCRIBED_STATUS,
		productId,
		subscribedStatus
	}
}

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

export function productsError(error) {
	return {
		type: actionTypes.PRODUCTS_ERROR,
		error
	}
}
