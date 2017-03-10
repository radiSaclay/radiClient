import actionTypes from '../config/actionTypes';

export function newsFetchRequest() {
	return {
		type: actionTypes.NEWS_FETCH_REQUEST
	}
}

export function newsFetchSuccess() {
	return {
		type: actionTypes.NEWS_FETCH_SUCCESS
	}
}

export function newsFetchError(errorMessage, errorStatus) {
	return {
		type: actionTypes.NEWS_ERROR,
		errorMessage,
		errorStatus
	}
}
