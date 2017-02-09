import userReducer from '../../app/reducers/userReducer'
import * as userActions from '../../app/actions/userActions'
import actionTypes from '../../app/config/actionTypes';


describe('userReducer', () =>{
	it('should return the initialState', () => {
		let expectedState = {
			error: null,
			idToken: null,
			isLoading: false,
			isMounted: false
		}
		expect(userReducer(undefined, {})).toEqual(expectedState)
	})

	it('should handle REDUX_STORAGE_LOAD', () => {
		let expectedState = {
			isMounted: true
		}
		expect(userReducer([], { type: actionTypes.REDUX_STORAGE_LOAD })).toEqual(expectedState)
	})

	it('should handle USER_AUTHENTICATION_REQUEST', () => {
		let expectedState = {
			isLoading: true,
		}
		expect(userReducer([], userActions.authRequest())).toEqual(expectedState)
	})

	it('should handle USER_AUTHENTICATION_SUCCESS', () => {
		let idToken = 'dbnub23dunb23p9ub238b'
		let expectedState = {
			idToken: idToken,
			isLoading: false,
		}
		expect(userReducer([], userActions.authSuccess(idToken))).toEqual(expectedState)
	})

	it('should handle USER_AUTHENTICATION_ERROR', () => {
		let error = new Error()
		let expectedState = {
			error: error,
			isLoading: false,
		}
		expect(userReducer([], userActions.authError(error))).toEqual(expectedState)
	})

	it('should handle USER_LOGOUT', () => {
		let expectedState = {
			idToken: null,
		}
		expect(userReducer([], userActions.logout())).toEqual(expectedState)
	})

})
