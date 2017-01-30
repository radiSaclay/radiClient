var SERVEUR_ROOT = 'https://evening-meadow-38993.herokuapp.com/'
var API_PATH = 'api/'

const settings = {
	keys: {
		ID_TOKEN: 'id_token'
	},
	urls: {
		AUTH_URL: SERVEUR_ROOT + 'auth/',
		EVENTS_URL: SERVEUR_ROOT + API_PATH + 'events/',
		EVENTS_PIN_URL: SERVEUR_ROOT + API_PATH + 'events/pin/',
		EVENTS_UNPIN_URL: SERVEUR_ROOT + API_PATH + 'events/unpin/',
		FARMS_URL: SERVEUR_ROOT + API_PATH + 'farms/',
		FARMS_SUBSCRIBE_URL: SERVEUR_ROOT + API_PATH + 'farms/subscribe/',
		FARMS_UNSUBSCRIBE_URL: SERVEUR_ROOT + API_PATH + 'farms/unsubscribe/',
		PRODUCTS_URL: SERVEUR_ROOT + API_PATH + 'products/',
	},
}

export default settings
