export function productsListFetchRequest() {
	return {
		type: 'PRODUCTS_LIST_FETCH_REQUEST'
	}
}

export function productsListFetchSuccess(products) {
	return {
		type: 'PRODUCTS_LIST_FETCH_SUCCESS',
		products
	}
}

export function productsListFetchError(error) {
	return {
		type: 'PRODUCTS_LIST_FETCH_ERROR',
		error
	}
}
