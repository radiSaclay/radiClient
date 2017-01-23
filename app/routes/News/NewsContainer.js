import React, { Component } from 'react';
import { AsyncStorage, ActivityIndicator } from 'react-native';
import { Actions } from 'react-native-router-flux';

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
		Promise.all([
			this.eventsPromise(),
			this.farmsPromise(),
			this.productsPromise()
		])
		.then((response) => {
			this.setState({
				eventsList: response[0].slice(0,3),
				farmsList: response[1].slice(0,3),
				productsList: response[2].slice(0,3),
				isLoaded: true
			});
		})
		.catch((error) => {
			console.error(error);
		})
	}

	checkStatus(response) {
	  if (response.status >= 200 && response.status < 300) {
	    return Promise.resolve(response)
	  } else {
	    return Promise.reject(new Error(response.statusText))
	  }
	}

	getJson(response) {
	  return response.json()
	}

	eventsPromise() {
		return AsyncStorage.getItem(settings.keys.ID_TOKEN)
		.then((idToken) => {
			return fetch(settings.urls.EVENTS_URL, {
				method: "GET",
				headers: {
					'Authorization': idToken
				}
			})
			.then(this.checkStatus)
			.then(this.getJson);
		});
	}

	farmsPromise() {
		return AsyncStorage.getItem(settings.keys.ID_TOKEN)
		.then((idToken) => {
			return fetch(settings.urls.FARMS_URL, {
				method: "GET",
				headers: {
					'Authorization': idToken
				}
			})
			.then(this.checkStatus)
			.then(this.getJson);
		});
	}

	productsPromise() {
		return AsyncStorage.getItem(settings.keys.ID_TOKEN)
		.then((idToken) => {
			return fetch(settings.urls.PRODUCTS_URL, {
				method: "GET",
				headers: {
					'Authorization': idToken
				}
			})
			.then(this.checkStatus)
			.then(this.getJson);
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
