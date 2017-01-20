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
			isLoaded: false,
		};
	}

	componentDidMount(){
		this.getEventsList();
	}

	getEventsList() {
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
				this.setState({
					// TODO: find a way to filter the last posted events
					eventsList: eventsList.slice(0,3),
					isLoaded: true
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

	render() {
		if (this.state.isLoaded) {
			return(
				<News
					showEventsList = {this.showEventsList}

					eventsList = {this.state.eventsList}
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
