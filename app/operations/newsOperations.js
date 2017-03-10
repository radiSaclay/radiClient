import configureStore from '../configureStore'

import * as actions from '../actions/newsActions'
import * as eventOperations from './eventOperations'
import * as farmOperations from './farmOperations'
import * as productOperations from './productOperations'

const store = configureStore()

// TODO: find a way to test this composition of operations
export function newsFetch (idToken) {
	return dispatch => {
		dispatch(actions.newsFetchRequest())
		return Promise.all([
			dispatch(eventOperations.eventsListFetch(idToken)),
			dispatch(farmOperations.farmsListFetch(idToken)),
			dispatch(productOperations.productsListFetch(idToken)),
		])
		.then(() => {
			dispatch(actions.newsFetchSuccess())
		})
		.catch(error => dispatch(actions.newsFetchError(error.response.data.msg, error.response.status)))
	}
}
