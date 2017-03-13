import newsReducer from '../../app/reducers/newsReducer'
import * as newsActions from '../../app/actions/newsActions'

describe('News reducer', () =>{
	it('should return the initialState', () => {
		let expectedState = {
			fetchedAll: false
		}
		expect(newsReducer(undefined, {})).toEqual(expectedState)
	})

	it('should handle NEWS_FETCH_REQUEST', () => {
		let expectedState = {
			fetchedAll: true
		}
		expect(newsReducer([], newsActions.newsFetchRequest())).toEqual(expectedState)
	})

	it('should handle NEWS_FETCH_SUCCESS', () => {
		let expectedState = {
			fetchedAll: false
		}
		expect(newsReducer([], newsActions.newsFetchSuccess())).toEqual(expectedState)
	})
})
