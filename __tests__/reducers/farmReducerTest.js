import farmReducer from '../../app/reducers/farmReducer'
import * as farmActions from '../../app/actions/farmActions'

describe('Farm reducer', () =>{
	it('should return the initialState', () => {
		let expectedState = {
			error: null,
			farms: [],
			isLoading: false
		}
		expect(farmReducer(undefined, {})).toEqual(expectedState)
	})

	it('should handle FARMS_LIST_FETCH_REQUEST', () => {
		let expectedState = {
			isLoading: true
		}
		expect(farmReducer([], farmActions.farmsListFetchRequest())).toEqual(expectedState)
	})

	it('should handle FARMS_LIST_FETCH_SUCCESS', () => {
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
		let expectedState = {
			farms: farms,
			isLoading: false
		}
		expect(farmReducer([], farmActions.farmsListFetchSuccess(farms))).toEqual(expectedState)
	})

	it('should handle FARMS_ERROR', () => {
		let error = new Error()
		let expectedState = {
			error: error,
			isLoading: false
		}
		expect(farmReducer([], farmActions.farmsError(error))).toEqual(expectedState)
	})

})
