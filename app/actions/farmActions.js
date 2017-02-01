export function farmsListFetchRequest() {
	return {
		type: 'FARMS_LIST_FETCH_REQUEST'
	}
}

export function farmsListFetchSuccess(farms) {
	return {
		type: 'FARMS_LIST_FETCH_SUCCESS',
		farms
	}
}

export function farmsListFetchError(error) {
	return {
		type: 'FARMS_LIST_FETCH_ERROR',
		error
	}
}
