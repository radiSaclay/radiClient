const apiUtils = {
	checkStatus: function(response) {
		if (response.status >= 200 && response.status < 300) {
			return response;
		} else {
			let error = new Error(response.statusText);
			error.response = response;
			return Promise.reject(error)
		}
	},
	getJson: function(response) {
		return response.json()
	}
};
export default apiUtils
