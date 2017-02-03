import actionTypes from '../config/actionTypes';

export function farmsListFetchRequest() {
	return {
		type: actionTypes.FARMS_LIST_FETCH_REQUEST
	}
}

export function farmsListFetchSuccess(farms) {
	return {
		type: actionTypes.FARMS_LIST_FETCH_SUCCESS,
		farms
	}
}

export function farmsListFetchError(error) {
	return {
		type: actionTypes.FARMS_LIST_FETCH_ERROR,
		error
	}
}
