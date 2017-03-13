import appReducer from '../../app/reducers/appReducer'
import * as appActions from '../../app/actions/appActions'
import * as userActions from '../../app/actions/userActions'
import * as eventActions from '../../app/actions/eventActions'
import * as farmActions from '../../app/actions/farmActions'
import * as newsActions from '../../app/actions/newsActions'
import * as productActions from '../../app/actions/productActions'
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

describe('appReducer catching event actions', () =>{
	it('should handle EVENTS_LIST_FETCH_REQUEST', () => {
		let expectedState = {
			isLoading: true,
		}
		expect(appReducer([], eventActions.eventsListFetchRequest())).toEqual(expectedState)
	})

	it('should handle EVENTS_LIST_FETCH_SUCCESS', () => {
		let expectedState = {
			isLoading: false,
		}
		expect(appReducer([], eventActions.eventsListFetchSuccess())).toEqual(expectedState)
	})

	it('should handle EVENT_ERROR', () => {
		let errorMessage = 'I am an awful error message'
		let errorStatus = 401
		let expectedState = {
			errorMessage: errorMessage,
			errorStatus: errorStatus,
			isLoading: false
		}
		expect(appReducer([], eventActions.eventError(errorMessage, errorStatus))).toEqual(expectedState)
	})
})

describe('appReducer catching farm actions', () =>{
	it('should handle FARMS_LIST_FETCH_REQUEST', () => {
		let expectedState = {
			isLoading: true,
		}
		expect(appReducer([], farmActions.farmsListFetchRequest())).toEqual(expectedState)
	})

	it('should handle FARMS_LIST_FETCH_SUCCESS', () => {
		let expectedState = {
			isLoading: false,
		}
		expect(appReducer([], farmActions.farmsListFetchSuccess())).toEqual(expectedState)
	})

	it('should handle FARM_ERROR', () => {
		let errorMessage = 'I am an awful error message'
		let errorStatus = 401
		let expectedState = {
			errorMessage: errorMessage,
			errorStatus: errorStatus,
			isLoading: false
		}
		expect(appReducer([], farmActions.farmError(errorMessage, errorStatus))).toEqual(expectedState)
	})
})

describe('appReducer catching product actions', () =>{
	it('should handle PRODUCTS_LIST_FETCH_REQUEST', () => {
		let expectedState = {
			isLoading: true,
		}
		expect(appReducer([], productActions.productsListFetchRequest())).toEqual(expectedState)
	})

	it('should handle PRODUCTS_LIST_FETCH_SUCCESS', () => {
		let expectedState = {
			isLoading: false,
		}
		expect(appReducer([], productActions.productsListFetchSuccess())).toEqual(expectedState)
	})

	it('should handle PRODUCT_ERROR', () => {
		let errorMessage = 'I am an awful error message'
		let errorStatus = 401
		let expectedState = {
			errorMessage: errorMessage,
			errorStatus: errorStatus,
			isLoading: false
		}
		expect(appReducer([], productActions.productError(errorMessage, errorStatus))).toEqual(expectedState)
	})
})

describe('appReducer catching news actions', () =>{
	it('should handle NEWS_FETCH_REQUEST', () => {
		let expectedState = {
			isLoading: true,
		}
		expect(appReducer([], newsActions.newsFetchRequest())).toEqual(expectedState)
	})

	it('should handle NEWS_FETCH_SUCCESS', () => {
		let expectedState = {
			isLoading: false,
		}
		expect(appReducer([], newsActions.newsFetchSuccess())).toEqual(expectedState)
	})

	it('should handle NEWS_ERROR', () => {
		let errorMessage = 'I am an awful error message'
		let errorStatus = 401
		let expectedState = {
			errorMessage: errorMessage,
			errorStatus: errorStatus,
			isLoading: false
		}
		expect(appReducer([], newsActions.newsFetchError(errorMessage, errorStatus))).toEqual(expectedState)
	})
})
