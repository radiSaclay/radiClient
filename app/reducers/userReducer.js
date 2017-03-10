import actionTypes from '../config/actionTypes';

const initialState = {
	idToken: null,
}

export default function user(state = initialState, action) {
	switch (action.type) {
		case actionTypes.USER_AUTHENTICATION_SUCCESS:
			return {
				...state,
				idToken: action.idToken,
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
