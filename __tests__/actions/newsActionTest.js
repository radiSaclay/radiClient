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
		let error = new Error()
		let expectedAction = {
			type: actionTypes.NEWS_FETCH_ERROR,
			error
		}
		expect(newsActions.newsFetchError(error)).toEqual(expectedAction)
	})
})
