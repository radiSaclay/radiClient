import actionTypes from '../config/actionTypes';

export function farmToggleSubscribedStatus(farmId, subscribedStatus) {
	return {
		type: actionTypes.FARM_TOGGLE_SUBSCRIBED_STATUS,
		farmId,
		subscribedStatus
	}
}

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

export function farmError(errorMessage, errorStatus) {
	return {
		type: actionTypes.FARM_ERROR,
		errorMessage,
		errorStatus
	}
}
