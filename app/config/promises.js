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
	},
	post: function(url, body) {
		return fetch(url, {
			method: "POST",
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(body)
		})
		.then(apiUtils.checkStatus)
		.then(apiUtils.getJson)
	}
};
export default promises
