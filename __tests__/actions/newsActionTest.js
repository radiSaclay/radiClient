import actionTypes from '../../app/config/actionTypes';
import * as newsActions from '../../app/actions/newsActions';

describe('Get news from the API', () => {
	it('should create an action when fetch news request fires', () => {
		let expectedAction = {
			type: actionTypes.NEWS_FETCH_REQUEST,
		}
		expect(newsActions.newsFetchRequest()).toEqual(expectedAction)
	})

	it('should create an action when fetch news succeeds', () => {
		let expectedAction = {
			type: actionTypes.NEWS_FETCH_SUCCESS,
		}
		expect(newsActions.newsFetchSuccess()).toEqual(expectedAction)
	})

	it('should create an action when fetch news raises an error', () => {
		let errorMessage = 'something awful happened'
		let errorStatus = 401
		let expectedAction = {
			type: actionTypes.NEWS_ERROR,
			errorMessage,
			errorStatus
		}
		expect(newsActions.newsFetchError(errorMessage,errorStatus)).toEqual(expectedAction)
	})
})
