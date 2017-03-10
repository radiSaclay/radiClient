import actionTypes from '../config/actionTypes';
import _ from 'lodash'

const initialState = {
	farms: []
}

export default function farms(state = initialState, action) {
	switch (action.type) {
		case actionTypes.FARM_TOGGLE_SUBSCRIBED_STATUS:
			let farms = Object.assign([], state.farms)
			let farm = _.find(farms, (farm) => { return farm.id === action.farmId })
			farm.subscribed = action.subscribedStatus
			return {
				...state,
				farms
			}
		case actionTypes.FARMS_LIST_FETCH_SUCCESS:
			return {
				...state,
				farms: action.farms,
			}
		case actionTypes.USER_LOGOUT:
			return initialState;
		default:
			return state
	}
}
