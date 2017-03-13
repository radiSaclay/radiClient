import nock from 'nock'
import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import * as userActions from '../../app/actions/userActions'
import * as operations from '../../app/operations/userOperations'
import settings from '../../app/config/settings'

const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)

describe('User authentication operations with regular email and password', () => {

	const idToken = 'bqdiuqbw9udb19b129dub1'
	const requestBody = {email: 'abcd@xyz.com', password: 'password'}
	const url = settings.urls.AUTH_SIGNUP_URL

	afterEach(() => {
		nock.cleanAll()
	})

	it('creates USER_AUTHENTICATION_SUCCESS when authenticating user is done', () => {
		let store = mockStore({idToken: null})
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
		let errorMessage = 'something awful happened'
		let errorStatus = 401
		let expectedActions = [
			userActions.authRequest(),
			userActions.authError(errorMessage, errorStatus)
		]
		let store = mockStore({idToken: null})

		nock(url)
			.post('', requestBody)
			.reply(errorStatus, {msg: errorMessage})

		return store.dispatch(operations.userAuth(url, requestBody))
			.then(() => {
				expect(store.getActions()).toEqual(expectedActions)
			})
	})
})

describe('User authentication operations with facebook', () => {

	const facebookToken = 'bqdiuqbw9udb19b129dub1'
	const idToken = 'bqdiuqbw9udb19b129dub1'
	const requestHeaders = {'Authorization': facebookToken}
	const url = settings.urls.AUTH_FACEBOOK_URL

	afterEach(() => {
		nock.cleanAll()
	})

	it('creates USER_AUTHENTICATION_SUCCESS when authenticating user is done', () => {
		let store = mockStore({idToken: null})
		let expectedActions = [
			userActions.authRequest(),
			userActions.authSuccess(idToken)
		]

		nock(url, requestHeaders)
			.post('')
			.reply(200, { token: idToken })

		return store.dispatch(operations.userFacebookAuth(url, facebookToken))
			.then(() => {
				expect(store.getActions()).toEqual(expectedActions)
			})
	})

	it('creates USER_AUTHENTICATION_ERROR when authenticating user returns an error', () => {
		let errorMessage = 'something awful happened'
		let errorStatus = 401
		let expectedActions = [
			userActions.authRequest(),
			userActions.authError(errorMessage, errorStatus)
		]
		let store = mockStore({idToken: null})

		nock(url, requestHeaders)
			.post('')
			.reply(errorStatus, {msg: errorMessage})

		return store.dispatch(operations.userFacebookAuth(url, facebookToken))
			.then(() => {
				expect(store.getActions()).toEqual(expectedActions)
			})
	})
})

describe('User logout operations', () => {
	it('creates USER_LOGOUT when user logs out', () => {
		let store = mockStore({idToken: 'bdiu3b92b3r9b'})
		let expectedActions = [userActions.logout()]

		store.dispatch(operations.userLogout())
		expect(store.getActions()).toEqual(expectedActions)
	})
})
