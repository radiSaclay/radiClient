import React, { Component } from 'react';
import { AsyncStorage, ActivityIndicator } from 'react-native';
import { Actions } from 'react-native-router-flux';

import apiUtils from '../../config/apiUtils';
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
		AsyncStorage.getItem(settings.keys.ID_TOKEN)
		.then((idToken) => {
			Promise.all([
				this.eventsPromise(idToken),
				this.farmsPromise(idToken),
				this.productsPromise(idToken)
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

	eventsPromise(idToken) {
		return fetch(settings.urls.EVENTS_URL, {
			method: "GET",
			headers: {
				'Authorization': idToken
			}
		})
		.then(apiUtils.checkStatus)
		.then(apiUtils.getJson)
	}

	farmsPromise(idToken) {
		return fetch(settings.urls.FARMS_URL, {
			method: "GET",
			headers: {
				'Authorization': idToken
			}
		})
		.then(apiUtils.checkStatus)
		.then(apiUtils.getJson)
	}

	productsPromise(idToken) {
		return fetch(settings.urls.PRODUCTS_URL, {
			method: "GET",
			headers: {
				'Authorization': idToken
			}
		})
		.then(apiUtils.checkStatus)
		.then(apiUtils.getJson)
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
