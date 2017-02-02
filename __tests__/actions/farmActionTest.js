import actionTypes from '../../app/config/actionTypes';
import * as farmActions from '../../app/actions/farmActions';

describe('Get farms from the API', () => {
	it('should create an action when fetch farms list request fires', () => {
		let expectedAction = {
			type: actionTypes.FARMS_LIST_FETCH_REQUEST,
		}
		expect(farmActions.farmsListFetchRequest()).toEqual(expectedAction)
	})

	it('should create an action when fetch farms list succeeds', () => {
		let farms = [
			{
				"id": 1,
				"name": "Farm 1",
				"website": "www.farm.com",
				"address": "123 rue de la ferme, 75000 Palaiseau",
				"phone": "+33123456789",
				"email": "farmer1@test.com",
				"subscribed": false,
				"ownerId": 1,
				"products": [1, 2, 3]
			},
			{
				"id": 2,
				"name": "Farm 2",
				"website": "www.farm.com",
				"address": "456 rue de la ferme, 75000 Palaiseau",
				"phone": "+33123456789",
				"email": "farmer2@test.com",
				"subscribed": true,
				"ownerId": 2,
				"products": [1, 2, 3]
			},
		]
		let expectedAction = {
			type: actionTypes.FARMS_LIST_FETCH_SUCCESS,
			farms
		}
		expect(farmActions.farmsListFetchSuccess(farms)).toEqual(expectedAction)
	})

	it('should create an action when fetch farms list raises an error', () => {
		let error = new Error()
		let expectedAction = {
			type: actionTypes.FARMS_LIST_FETCH_ERROR,
			error
		}
		expect(farmActions.farmsListFetchError(error)).toEqual(expectedAction)
	})
})
