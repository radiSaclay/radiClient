import configureStore from '../configureStore'

import * as newsActions from '../actions/newsActions'
import * as eventActions from '../actions/eventActions'
import * as farmActions from '../actions/farmActions'
import * as productActions from '../actions/productActions'

import promises from '../config/promises'
import settings from '../config/settings'

const store = configureStore()

// TODO: find a way to test this composition of operations
export function newsFetch (idToken) {
	return dispatch => {
		dispatch(newsActions.newsFetchRequest())
		return Promise.all([
			promises.getWithToken(settings.urls.EVENTS_URL_DETAILED,idToken),
			promises.getWithToken(settings.urls.FARMS_URL,idToken),
			promises.getWithToken(settings.urls.PRODUCTS_URL,idToken)
		])
		.then((responses) => {
			dispatch(eventActions.eventsListFetchSuccess(responses[0].data))
			dispatch(farmActions.farmsListFetchSuccess(responses[1].data))
			dispatch(productActions.productsListFetchSuccess(responses[2].data))
			dispatch(newsActions.newsFetchSuccess())
		})
		.catch(error => dispatch(newsActions.newsFetchError(error.response.data.msg, error.response.status)))
	}
}
