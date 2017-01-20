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
					this.setState({
						eventsList: eventsList.slice(0,3),
						farmsList: farmsList.slice(0,3),
						isLoaded: true
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

	render() {
		if (this.state.isLoaded) {
			return(
				<News
					showEventsList = {this.showEventsList}
					showFarmsList = {this.showFarmsList}

					eventsList = {this.state.eventsList}
					farmsList = {this.state.farmsList}
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
