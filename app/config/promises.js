import apiUtils from './apiUtils'

const promises = {
	getAuthorized: function(url, idToken) {
		return fetch(url, {
			method: "GET",
			headers: {
				'Authorization': idToken
			}
		})
		.then(apiUtils.checkStatus)
		.then(apiUtils.getJson)
	}
};
export default promises
