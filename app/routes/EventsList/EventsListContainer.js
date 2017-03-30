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

EventsListContainer.defaultProps = {
	displayPinned: false,
}

EventsListContainer.PropTypes = {
	// from parent
	/* optional */ displayPinned: React.PropTypes.bool,

	// from redux
	eventsList: React.PropTypes.bool,
	fetchEventsList: React.PropTypes.func,
	idToken: React.PropTypes.string,
	isLoading: React.PropTypes.bool,
}

const mapStateToProps = (store, ownProps) => {
	let storeEvents = store.events.events
	let events = ownProps.displayPinned ? storeEvents.filter(event => event.pinned) : storeEvents

	return {
		eventsList: events,
		idToken: store.user.idToken,
		isLoading: store.app.isLoading,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchEventsList: (idToken) => dispatch(eventOperations.eventsListFetch(idToken))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsListContainer);
