import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';

import promises from '../../config/promises';
import settings from '../../config/settings';

import Event from './Event.js';

class EventContainer extends Component {

	getEventDetail() {
		AsyncStorage.getItem(settings.keys.ID_TOKEN)
		.then((idToken) => {
			promises.getWithToken(settings.urls.EVENTS_URL + this.props.eventId, idToken)
			.then((response) => {
				Actions.EventDetailContainer(response.data)
			})
			.catch((error) => {
				console.error(error.response.data);
			});
		})
	}

	render() {
		return (
			<Event
				getEventDetail={this.getEventDetail.bind(this)}

				endDate={this.props.endDate}
				producer={this.props.producer}
				title={this.props.title}
				/>
		);
	}
}

EventContainer.propTypes = {
	endDate: React.PropTypes.string,
	eventId: React.PropTypes.number,
	producer: React.PropTypes.string,
	title: React.PropTypes.string
};

export default EventContainer;
