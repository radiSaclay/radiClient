import actionTypes from '../../app/config/actionTypes';
import * as userActions from '../../app/actions/userActions';

describe('Authenticate user', () => {
	it('should create an action when authentication request fires', () => {
		let expectedAction = {
			type: actionTypes.USER_AUTHENTICATION_REQUEST,
		}
		expect(userActions.authRequest()).toEqual(expectedAction)
	})

	it('should create an action when authentication succeeds', () => {
		let idToken = ' b1e0871be71b2e98b128eb812be9b1'
		let expectedAction = {
			type: actionTypes.USER_AUTHENTICATION_SUCCESS,
			idToken
		}
		expect(userActions.authSuccess(idToken)).toEqual(expectedAction)
	})

	it('should create an action when authentication raises an error', () => {
		let errorMessage = 'I am an awful error message'
		let expectedAction = {
			type: actionTypes.USER_AUTHENTICATION_ERROR,
			errorMessage
		}
		expect(userActions.authError(errorMessage)).toEqual(expectedAction)
	})
})

describe('Logout user', () => {
	it('should create an action when the user logs out', () => {
		let expectedAction = {
			type: actionTypes.USER_LOGOUT,
		}
		expect(userActions.logout()).toEqual(expectedAction)
	})
})
