import actionTypes from '../config/actionTypes';

const initialState = {
	error: null,
	idToken: null,
	isLoading: false
}

export default function user(state = initialState, action) {
	switch (action.type) {
		case actionTypes.USER_AUTHENTICATION_REQUEST:
			return {...state, isLoading: true}
		case actionTypes.USER_AUTHENTICATION_SUCCESS:
			return {
				...state,
				idToken: action.idToken,
				isLoading:false
			}
		case actionTypes.USER_AUTHENTICATION_ERROR:
			return {
				...state,
				error: action.error,
				isLoading: false
			}
		case actionTypes.USER_LOGOUT:
		return{
			...state,
			idToken: null,
		}
		default:
			return state
	}
}
