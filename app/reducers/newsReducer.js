import actionTypes from '../config/actionTypes';

const initialState = {
	fetchedAll: false
}

export default function news(state = initialState, action) {
	switch (action.type) {
		case actionTypes.NEWS_FETCH_REQUEST:
			return {...state, fetchedAll: true}
		case actionTypes.NEWS_FETCH_SUCCESS:
			return {...state, fetchedAll:false}
		default:
			return state
	}
}
