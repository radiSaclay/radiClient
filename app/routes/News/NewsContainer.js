import React, { Component } from 'react';
import { AsyncStorage, ActivityIndicator } from 'react-native';
import { Actions } from 'react-native-router-flux';

import promises from '../../config/promises';
import settings from '../../config/settings';

import News from './News.js'

class NewsContainer extends Component {

	constructor() {
		super();
		this.state = {
			eventsList: null,
			farmsList: null,
			productsList: null,
			isLoaded: false,
		};
	}

	componentDidMount(){
		this.getNews()
	}

	getNews() {
		AsyncStorage.getItem(settings.keys.ID_TOKEN)
		.then((idToken) => {
			Promise.all([
				promises.getAuthorized(settings.urls.EVENTS_URL, idToken),
				promises.getAuthorized(settings.urls.FARMS_URL, idToken),
				promises.getAuthorized(settings.urls.PRODUCTS_URL, idToken)
			])
			.then((response) => {
				this.setState({
					eventsList: response[0].slice(0,3),
					farmsList: response[1].slice(0,3),
					productsList: response[2].slice(0,3),
					isLoaded: true
				});
			})
		})
		.catch((error) => {
			console.error(error);
		})
	}

	showEventsList() {
		Actions.EventsList()
	}

	showFarmsList() {
		Actions.FarmsList()
	}

	showProductsList() {
		Actions.ProductsList()
	}

	render() {
		if (this.state.isLoaded) {
			return(
				<News
					showEventsList = {this.showEventsList}
					showFarmsList = {this.showFarmsList}
					showProductsList = {this.showProductsList}

					eventsList = {this.state.eventsList}
					farmsList = {this.state.farmsList}
					productsList = {this.state.productsList}
					/>
			)
		} else {
			return (
				<ActivityIndicator />
			)
		}
	}
}

export default NewsContainer
