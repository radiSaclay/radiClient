import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import * as appActions from '../../app/actions/appActions'
import * as operations from '../../app/operations/appOperations'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('User logout operations', () => {
	it('creates APP_ERROR_REMOVE when user aknowledges an error', () => {
		let store = mockStore({errorMessage: 'Error message', isLoading: false, isMounted: true})
		let expectedActions = [appActions.errorRemove()]

		store.dispatch(operations.errorRemove())
		expect(store.getActions()).toEqual(expectedActions)
	})
})
