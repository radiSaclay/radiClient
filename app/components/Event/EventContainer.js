import React, { Component } from 'react';
import { AsyncStorage } from 'react-native';
import { Actions } from 'react-native-router-flux';

import apiUtils from '../../config/apiUtils';
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
			.then(apiUtils.checkStatus)
			.then(apiUtils.getJson)
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
