import nock from 'nock'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import * as userActions from '../../app/actions/userActions'
import * as operations from '../../app/operations/userOperations'
import settings from '../../app/config/settings'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('User authentication operations', () => {

	const idToken = 'bqdiuqbw9udb19b129dub1'
	const requestBody = {email: 'abcd@xyz.com', password: 'password'}
	const url = settings.urls.AUTH_SIGNUP_URL

	afterEach(() => {
		nock.cleanAll()
	})

	it('creates USER_AUTHENTICATION_SUCCESS when authenticating user is done', () => {
		let store = mockStore({error: null, idToken: null, isLoading: false, isMounted: true})
		let expectedActions = [
			userActions.authRequest(),
			userActions.authSuccess(idToken)
		]

		nock(url)
			.post('', requestBody)
			.reply(200, {
					token: idToken
			})

		return store.dispatch(operations.userAuth(url, requestBody))
			.then(() => {
				expect(store.getActions()).toEqual(expectedActions)
			})
	})

	it('creates USER_AUTHENTICATION_ERROR when authenticating user returns an error', () => {
		let responseError = new Error('something awful happened')
		let expectedActions = [userActions.authRequest(), userActions.authError(responseError)]
		let store = mockStore({error: null, idToken: null, isLoading: false, isMounted: true})

		nock(url)
			.post('', requestBody)
			.replyWithError('something awful happened')

		return store.dispatch(operations.userAuth(url, requestBody))
			.then(() => {
				expect(store.getActions()).toEqual(expectedActions)
			})
	})
})

describe('User logout operations', () => {
	it('creates USER_LOGOUT when user logs out', () => {
		let store = mockStore({error: null, idToken: 'bdiu3b92b3r9b', isLoading: false, isMounted: true})
		let expectedActions = [userActions.logout()]

		store.dispatch(operations.userLogout())
		expect(store.getActions()).toEqual(expectedActions)
	})
})
