import React, { Component } from 'react';
import { connect } from 'react-redux'

import settings from '../../config/settings';
import * as eventOperations from '../../operations/eventOperations'

import EventsList from './EventsList';

class EventsListContainer extends Component {

	onRefresh() {
		this.props.fetchEventsList(this.props.idToken)
	}

	// TODO: add error handling
	render() {
		return (
			<EventsList
				eventsList={this.props.eventsList}
				isLoading={this.props.isLoading}
				onRefresh={this.onRefresh.bind(this)}
			/>
		)
	}
}

const mapStateToProps = (store) => {
	return {
		eventsList: store.events.events,
		idToken: store.user.idToken,
		isLoading: store.app.isLoading
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchEventsList: (idToken) => dispatch(eventOperations.eventsListFetch(idToken))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsListContainer);
