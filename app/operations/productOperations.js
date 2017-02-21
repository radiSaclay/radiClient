import * as actions from '../actions/productActions'
import promises from '../config/promises'
import settings from '../config/settings'

export function productToggleSubscribedStatus (idToken, productId, subscribedStatus) {
	return dispatch => {
		let url = (subscribedStatus ? settings.urls.PRODUCTS_UNSUBSCRIBE_URL : settings.urls.PRODUCTS_SUBSCRIBE_URL) + productId
		return promises.postWithToken(url, idToken)
		.then((response) => {
			dispatch(actions.productToggleSubscribedStatus(productId, !subscribedStatus))
		})
		.catch((error) => dispatch(actions.productsError(error)))
	}
}

export function productsListFetch (idToken) {
	return dispatch => {
		dispatch(actions.productsListFetchRequest())
		return promises.getWithToken(settings.urls.PRODUCTS_URL,idToken)
		.then((products) => {
			dispatch(actions.productsListFetchSuccess(products.data))
		})
		.catch(error => dispatch(actions.productsError(error)))
	}
}
