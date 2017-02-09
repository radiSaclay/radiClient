import newsReducer from '../../app/reducers/newsReducer'
import * as newsActions from '../../app/actions/newsActions'

describe('News reducer', () =>{
	it('should return the initialState', () => {
		let expectedState = {
			error: null,
			isLoading: false
		}
		expect(newsReducer(undefined, {})).toEqual(expectedState)
	})

	it('should handle NEWS_FETCH_REQUEST', () => {
		let expectedState = {
			error: null,
			isLoading: true
		}
		expect(newsReducer(undefined, newsActions.newsFetchRequest())).toEqual(expectedState)
	})

	it('should handle NEWS_FETCH_SUCCESS', () => {
		let expectedState = {
			error: null,
			isLoading: false
		}
		expect(newsReducer(undefined, newsActions.newsFetchSuccess())).toEqual(expectedState)
	})

	it('should handle NEWS_FETCH_ERROR', () => {
		let error = new Error()
		let expectedState = {
			error: error,
			isLoading: false
		}
		expect(newsReducer(undefined, newsActions.newsFetchError(error))).toEqual(expectedState)
	})

})
