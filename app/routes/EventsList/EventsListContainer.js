import React, { Component } from 'react';
import { ActivityIndicator,	AsyncStorage } from 'react-native';

import promises from '../../config/promises'
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

	// TODO: add better error handling
	getEventsList() {
		AsyncStorage.getItem(settings.keys.ID_TOKEN)
		.then((idToken) => {
			promises.getWithToken(settings.urls.EVENTS_URL, idToken)
			.then(response => {
				this.setState({
					eventsList: response.data,
					isLoaded: true
				})
			})
			.catch(error => {
				console.error(error.response.data)
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
