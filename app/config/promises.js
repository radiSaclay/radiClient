import axios from 'axios'

const promises = {
	getWithToken: function(url, idToken) {
		return axios.get( url, {
			headers: {'Authorization': idToken}
		})
	},
	post: function(url, body) {
		return axios.post(url, body)
	},
	postWithToken: function(url, idToken, body) {
		return axios({
			body: body,
			headers: {'Authorization': idToken},
			method: 'post',
			url: url
		})
	}
};
export default promises
