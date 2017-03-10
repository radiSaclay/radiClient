import userReducer from '../../app/reducers/userReducer'
import * as userActions from '../../app/actions/userActions'
import actionTypes from '../../app/config/actionTypes';


describe('userReducer', () =>{
	it('should return the initialState', () => {
		let expectedState = {
			idToken: null,
		}
		expect(userReducer(undefined, {})).toEqual(expectedState)
	})

	it('should handle USER_AUTHENTICATION_SUCCESS', () => {
		let idToken = 'dbnub23dunb23p9ub238b'
		let expectedState = {
			idToken: idToken,
		}
		expect(userReducer([], userActions.authSuccess(idToken))).toEqual(expectedState)
	})

	it('should handle USER_LOGOUT', () => {
		let expectedState = {
			idToken: null,
		}
		expect(userReducer([], userActions.logout())).toEqual(expectedState)
	})

})
