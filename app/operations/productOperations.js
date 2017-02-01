import * as actions from '../actions/productActions'
import promises from '../config/promises'
import settings from '../config/settings'

export function productsListFetch (idToken) {
	return dispatch => {
		dispatch(actions.productsListFetchRequest())
		return promises.getWithToken(settings.urls.PRODUCTS_URL,idToken)
		.then((products) => {
			dispatch(actions.productsListFetchSuccess(products.data))
		})
		.catch(error => dispatch(actions.productsListFetchError(error)))
	}
}
