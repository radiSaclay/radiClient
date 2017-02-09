import actionTypes from '../config/actionTypes';

const initialState = {
	error: null,
	isLoading: false
}

export default function news(state = initialState, action) {
	switch (action.type) {
		case actionTypes.NEWS_FETCH_REQUEST:
			return {...state, isLoading: true}
		case actionTypes.NEWS_FETCH_SUCCESS:
			return {...state, isLoading:false}
		case actionTypes.NEWS_FETCH_ERROR:
			return {
				...state,
				error: action.error,
				isLoading: false
			}
		default:
			return state
	}
}
