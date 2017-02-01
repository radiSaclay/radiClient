import React, { Component } from 'react'
import { ActivityIndicator, AsyncStorage } from 'react-native'

import promises from '../../config/promises'
import settings from '../../config/settings'

import FarmsList from './FarmsList'

class FarmsListContainer extends Component {
	constructor() {
		super();
		this.state = {
			farmsList: null,
			isLoaded: false,
		}
	}

	componentDidMount() {
		this.getFarmsList()
	}

	// TODO: add better error handling
	// TODO: load less information about farms
	getFarmsList() {
		AsyncStorage.getItem(settings.keys.ID_TOKEN)
		.then((idToken) => {
			promises.getWithToken(settings.urls.FARMS_URL, idToken)
			.then((response) => {
				this.setState({
					farmsList: response.data,
					isLoaded: true
				})
			})
			.catch((error) => {
				console.error(error.response.data);
			})
		})
	}

	render() {
		if (this.state.isLoaded) {
			return (
				<FarmsList	farmsList={this.state.farmsList} />
			)
		} else {
			return (
				<ActivityIndicator />
			)
		}
	}
}

export default FarmsListContainer;
