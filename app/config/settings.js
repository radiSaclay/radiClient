var SERVER_ROOT = 'http://ec2-52-56-114-123.eu-west-2.compute.amazonaws.com/'
var API_PATH = 'api/'
var AUTH_PATH = 'auth/'

const settings = {
	keys: {
		ID_TOKEN: 'id_token'
	},
	urls: {
		AUTH_FACEBOOK_URL: SERVER_ROOT + AUTH_PATH + 'fb',
		AUTH_LOGIN_URL: SERVER_ROOT + AUTH_PATH + 'login',
		AUTH_SIGNUP_URL: SERVER_ROOT + AUTH_PATH + 'signup',
		EVENTS_URL: SERVER_ROOT + API_PATH + 'events/',
		EVENTS_URL_DETAILED: SERVER_ROOT + API_PATH + 'events/?embedded=1',
		EVENTS_PIN_URL: SERVER_ROOT + API_PATH + 'events/pin/',
		EVENTS_UNPIN_URL: SERVER_ROOT + API_PATH + 'events/unpin/',
		FARMS_URL: SERVER_ROOT + API_PATH + 'farms/',
		FARMS_SUBSCRIBE_URL: SERVER_ROOT + API_PATH + 'farms/subscribe/',
		FARMS_UNSUBSCRIBE_URL: SERVER_ROOT + API_PATH + 'farms/unsubscribe/',
		PRODUCTS_URL: SERVER_ROOT + API_PATH + 'products/',
		PRODUCTS_SUBSCRIBE_URL: SERVER_ROOT + API_PATH + 'products/subscribe/',
		PRODUCTS_UNSUBSCRIBE_URL: SERVER_ROOT + API_PATH + 'products/unsubscribe/',
	},
}

export default settings
