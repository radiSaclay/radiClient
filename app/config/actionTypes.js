const actionTypes = {
	APP_ERROR_REMOVE: 'APP_ERROR_REMOVE',

	EVENT_TOGGLE_PINNED_STATUS: 'EVENT_TOGGLE_PINNED_STATUS',
	EVENTS_LIST_FETCH_REQUEST: 'EVENTS_LIST_FETCH_REQUEST',
	EVENTS_LIST_FETCH_SUCCESS: 'EVENTS_LIST_FETCH_SUCCESS',
	EVENT_ERROR: 'EVENT_ERROR',

	FARM_TOGGLE_SUBSCRIBED_STATUS: 'FARM_TOGGLE_SUBSCRIBED_STATUS',
	FARMS_LIST_FETCH_REQUEST: 'FARMS_LIST_FETCH_REQUEST',
	FARMS_LIST_FETCH_SUCCESS: 'FARMS_LIST_FETCH_SUCCESS',
	FARMS_ERROR: 'FARMS_ERROR',

	NEWS_FETCH_REQUEST: 'NEWS_FETCH_REQUEST',
	NEWS_FETCH_SUCCESS: 'NEWS_FETCH_SUCCESS',
	NEWS_FETCH_ERROR: 'NEWS_FETCH_ERROR',

	PRODUCT_TOGGLE_SUBSCRIBED_STATUS: 'PRODUCT_TOGGLE_SUBSCRIBED_STATUS',
	PRODUCTS_ERROR: 'PRODUCTS_ERROR',
	PRODUCTS_LIST_FETCH_REQUEST: 'PRODUCTS_LIST_FETCH_REQUEST',
	PRODUCTS_LIST_FETCH_SUCCESS: 'PRODUCTS_LIST_FETCH_SUCCESS',

	REDUX_STORAGE_LOAD: 'REDUX_STORAGE_LOAD',

	USER_AUTHENTICATION_REQUEST: 'USER_AUTHENTICATION_REQUEST',
	USER_AUTHENTICATION_SUCCESS: 'USER_AUTHENTICATION_SUCCESS',
	USER_AUTHENTICATION_ERROR: 'USER_AUTHENTICATION_ERROR',
	USER_LOGOUT: 'USER_LOGOUT',
};

export default actionTypes;
