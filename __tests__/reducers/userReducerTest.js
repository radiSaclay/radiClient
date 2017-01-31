import userReducer from '../../app/reducers/userReducer'
import * as userActions from '../../app/actions/userActions'

describe('userReducer', () =>{
	it('should return the initialState', () => {
		let expectedState = {
			error: null,
			idToken: null,
			isLoading: false
		}
		expect(userReducer(undefined, {})).toEqual(expectedState)
	})

	it('should handle USER_AUTHENTICATION_REQUEST', () => {
		let expectedState = {
			error: null,
			idToken: null,
			isLoading: true
		}
		expect(userReducer(undefined, userActions.authRequest())).toEqual(expectedState)
	})

	it('should handle USER_AUTHENTICATION_SUCCESS', () => {
		let idToken = 'dbnub23dunb23p9ub238b'
		let expectedState = {
			error: null,
			idToken: idToken,
			isLoading: false
		}
		expect(userReducer(undefined, userActions.authSuccess(idToken))).toEqual(expectedState)
	})

	it('should handle USER_AUTHENTICATION_ERROR', () => {
		let error = new Error()
		let expectedState = {
			error: error,
			idToken: null,
			isLoading: false
		}
		expect(userReducer(undefined, userActions.authError(error))).toEqual(expectedState)
	})

	it('should handle USER_LOGOUT', () => {
		let expectedState = {
			error: null,
			idToken: null,
			isLoading: false
		}
		expect(userReducer(undefined, userActions.logout())).toEqual(expectedState)
	})

})
