import actionTypes from '../config/actionTypes';

const initialState = {
	error: null,
	farms: [],
	isLoading: false
}

export default function farms(state = initialState, action) {
	switch (action.type) {
		case actionTypes.FARMS_LIST_FETCH_REQUEST:
			return {...state, isLoading: true}
		case actionTypes.FARMS_LIST_FETCH_SUCCESS:
			return {
				...state,
				farms: action.farms,
				isLoading:false
			}
		case actionTypes.FARMS_LIST_FETCH_ERROR:
			return {
				...state,
				error: action.error,
				isLoading: false
			}
		default:
			return state
	}
}
