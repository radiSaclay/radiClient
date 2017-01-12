import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';

import settings from '../../config/settings';

import Event from './Event.js';

class EventContainer extends Component {

	getEventDetail() {
		AsyncStorage.getItem(settings.keys.ID_TOKEN).then((idToken) => {
			fetch(settings.urls.EVENTS_URL + this.props.eventId, {
				method: "GET",
				headers: {
					'Authorization': idToken
				}
			})
			.then((response) => response.json())
			.then((eventDetails) => {
				Actions.EventDetailContainer(eventDetails)
			})
			.catch((error) => {
				console.error(error);
			});
		})
	}

	render() {
		return (
			<Event
				getEventDetail={this.getEventDetail.bind(this)}

				endDate={this.props.endDate}
				producer={this.props.producer}
				product={this.props.product}
				/>
		);
	}
}

EventContainer.propTypes = {
	endDate: React.PropTypes.string,
	eventId: React.PropTypes.number,
	producer: React.PropTypes.string,
	product: React.PropTypes.string
};

export default EventContainer;
