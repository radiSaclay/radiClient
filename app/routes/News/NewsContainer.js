import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';

class NewsContainer extends Component {

	constructor() {
		super();
		this.state = {
			isLoaded: false,
		};
	}

	render() {
		return (
			<ActivityIndicator />
		)
	}
}

export default NewsContainer
