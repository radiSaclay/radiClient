import farmReducer from '../../app/reducers/farmReducer'
import * as farmActions from '../../app/actions/farmActions'
import * as userActions from '../../app/actions/userActions'

describe('Farm reducer', () =>{
	initialState = {
		farms: [],
	}

	it('should return the initialState', () => {
		expect(farmReducer(undefined, {})).toEqual(initialState)
	})

	it('should return the initialState when user logs out', () =>{
		expect(farmReducer([], userActions.logout())).toEqual(initialState)
	})

	it('should handle FARM_TOGGLE_SUBSCRIBED_STATUS', () => {
		let initialState = {
			farms: [
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
				}
			]
		}

		let farmId = 1
		let subscribedStatus = true

		let expectedState = {
			farms: [
				{
					"id": 1,
					"name": "Farm 1",
					"website": "www.farm.com",
					"address": "123 rue de la ferme, 75000 Palaiseau",
					"phone": "+33123456789",
					"email": "farmer1@test.com",
					"subscribed": true,
					"ownerId": 1,
					"products": [1, 2, 3]
				}
			]
		}
		expect(farmReducer(initialState, farmActions.farmToggleSubscribedStatus(farmId, subscribedStatus))).toEqual(expectedState)
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
		}
		expect(farmReducer([], farmActions.farmsListFetchSuccess(farms))).toEqual(expectedState)
	})

	it('should handle FARM_TOGGLE_SUBSCRIBED_STATUS', () => {
		let initialState = {
			farms: [
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
					"subscribed": false,
					"ownerId": 2,
					"products": [1, 2, 3]
				}
			]
		}

		let farmId = 1
		let subscribedStatus = true

		let expectedState = {
			farms: [
				{
					"id": 1,
					"name": "Farm 1",
					"website": "www.farm.com",
					"address": "123 rue de la ferme, 75000 Palaiseau",
					"phone": "+33123456789",
					"email": "farmer1@test.com",
					"subscribed": true,
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
					"subscribed": false,
					"ownerId": 2,
					"products": [1, 2, 3]
				}
			]
		}
		expect(farmReducer(initialState, farmActions.farmToggleSubscribedStatus(farmId, subscribedStatus))).toEqual(expectedState)
	})
})
