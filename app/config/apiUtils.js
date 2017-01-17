// Check for response status and throw an Error if the promise fails
const apiUtils = {
  checkStatus: function(response) {
    if (response.status >= 200 && response.status < 300) {
      return response;
    } else {
			console.log(response.json());
			let error = new Error(response.statusText);
      error.response = response;
      throw error;
    }
  }
};
export default apiUtils
