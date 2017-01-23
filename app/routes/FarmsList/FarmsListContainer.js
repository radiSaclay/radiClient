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

	/*
		Gets the list of the farms around the user.
	*/
	// TODO: load less information about farms
	getFarmsList() {
		AsyncStorage.getItem(settings.keys.ID_TOKEN)
		.then((idToken) => {
			promises.getAuthorized(settings.urls.FARMS_URL, idToken)
			.then((farmsList) => {
				this.setState({
					farmsList: farmsList,
					isLoaded: true
				})
			})
			.catch((error) => {
				console.error(error);
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
