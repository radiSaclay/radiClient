import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import promises from '../../config/promises';
import settings from '../../config/settings';

import Event from './Event.js';

class EventContainer extends Component {

	getEventDetail() {
		promises.getWithToken(settings.urls.EVENTS_URL + this.props.eventId, this.props.idToken)
		.then((response) => {
			Actions.EventDetailContainer(response.data)
		})
		.catch((error) => {
			console.error(error.response.data)
		});
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
	// from parent
	endDate: React.PropTypes.string,
	eventId: React.PropTypes.number,
	producer: React.PropTypes.string,
	title: React.PropTypes.string,

	// from redux
	idToken: React.PropTypes.string,
};

const mapStateToProps = (store) => {
	return {
		idToken: store.user.idToken,
	}
}

export default connect(mapStateToProps)(EventContainer);
