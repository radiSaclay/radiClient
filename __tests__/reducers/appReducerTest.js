import appReducer from '../../app/reducers/appReducer'
import * as appActions from '../../app/actions/appActions'
import * as userActions from '../../app/actions/userActions'
import actionTypes from '../../app/config/actionTypes';


describe('appReducer', () =>{
	it('should return the initialState', () => {
		let expectedState = {
			errorMessage: null,
			errorStatus: null,
			isLoading: false,
			isMounted: false
		}
		expect(appReducer(undefined, {})).toEqual(expectedState)
	})

	it('should handle REDUX_STORAGE_LOAD', () => {
		let expectedState = {
			isMounted: true
		}
		expect(appReducer([], { type: actionTypes.REDUX_STORAGE_LOAD })).toEqual(expectedState)
	})

	it('should handle APP_ERROR_REMOVE', () => {
		let expectedState = {
			errorMessage: null,
			errorStatus: null,
		}
		expect(appReducer([], appActions.errorRemove())).toEqual(expectedState)
	})
})

describe('appReducer catching user actions', () =>{
	it('should handle USER_AUTHENTICATION_REQUEST', () => {
		let expectedState = {
			isLoading: true,
		}
		expect(appReducer([], userActions.authRequest())).toEqual(expectedState)
	})

	it('should handle USER_AUTHENTICATION_SUCCESS', () => {
		let expectedState = {
			isLoading: false,
		}
		expect(appReducer([], userActions.authSuccess())).toEqual(expectedState)
	})

	it('should handle USER_AUTHENTICATION_ERROR', () => {
		let errorMessage = 'I am an awful error message'
		let errorStatus = 401
		let expectedState = {
			errorMessage: errorMessage,
			errorStatus: errorStatus,
			isLoading: false
		}
		expect(appReducer([], userActions.authError(errorMessage, errorStatus))).toEqual(expectedState)
	})
})
