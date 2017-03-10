var SERVEUR_ROOT = 'http://ec2-52-56-114-123.eu-west-2.compute.amazonaws.com/'
var API_PATH = 'api/'

const settings = {
	keys: {
		ID_TOKEN: 'id_token'
	},
	urls: {
		AUTH_LOGIN_URL: SERVEUR_ROOT + 'auth/login',
		AUTH_SIGNUP_URL: SERVEUR_ROOT + 'auth/signup',
		EVENTS_URL: SERVEUR_ROOT + API_PATH + 'events/',
		EVENTS_URL_DETAILED: SERVEUR_ROOT + API_PATH + 'events/?embedded=1',
		EVENTS_PIN_URL: SERVEUR_ROOT + API_PATH + 'events/pin/',
		EVENTS_UNPIN_URL: SERVEUR_ROOT + API_PATH + 'events/unpin/',
		FARMS_URL: SERVEUR_ROOT + API_PATH + 'farms/',
		FARMS_SUBSCRIBE_URL: SERVEUR_ROOT + API_PATH + 'farms/subscribe/',
		FARMS_UNSUBSCRIBE_URL: SERVEUR_ROOT + API_PATH + 'farms/unsubscribe/',
		PRODUCTS_URL: SERVEUR_ROOT + API_PATH + 'products/',
		PRODUCTS_SUBSCRIBE_URL: SERVEUR_ROOT + API_PATH + 'products/subscribe/',
		PRODUCTS_UNSUBSCRIBE_URL: SERVEUR_ROOT + API_PATH + 'products/unsubscribe/',
	},
}

export default settings
