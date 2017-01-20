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
		this.getAllNews();
	}

	getAllNews() {
		AsyncStorage.getItem(settings.keys.ID_TOKEN)
		.then((idToken) => {
			fetch(settings.urls.EVENTS_URL, {
				method: "GET",
				headers: {
					'Authorization': idToken
				}
			})
			.then((response) => response.json())
			.then((eventsList) => {
				fetch(settings.urls.FARMS_URL, {
					method: "GET",
					headers: {
						'Authorization': idToken
					}
				})
				.then((response) => response.json())
				.then((farmsList) => {
					fetch(settings.urls.PRODUCTS_URL, {
						method: "GET",
						headers: {
							'Authorization': idToken
						}
					})
					.then((response) => response.json())
					.then((productsList) => {
						this.setState({
							eventsList: eventsList.slice(0,3),
							farmsList: farmsList.slice(0,3),
							productsList: productsList.slice(0,3),
							isLoaded: true
						})
					})
				})
			})
			.catch((error) => {
				console.error(error);
			})
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
