import React, { Component } from 'react';
import { ActivityIndicator,	AsyncStorage } from 'react-native';

import settings from '../../config/settings';

import EventsList from './EventsList';

class EventsListContainer extends Component {

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
					eventsList: eventsList,
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
				<EventsList	eventsList={this.state.eventsList} />
			)
		} else {
			return (
				<ActivityIndicator />
			)
		}
	}
}

export default EventsListContainer
