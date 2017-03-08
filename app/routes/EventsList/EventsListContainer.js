import React, { Component } from 'react';
import { ActivityIndicator } from 'react-native';
import { connect } from 'react-redux'

import settings from '../../config/settings';
import * as eventOperations from '../../operations/eventOperations'

import EventsList from './EventsList';
import Header from '../../components/Header';

class EventsListContainer extends Component {

	onRefresh() {
		this.props.fetchEventsList(this.props.idToken)
	}

	// TODO: add error handling
	render() {
		return (
			<Header title={this.props.title}>
				<EventsList
					eventsList={this.props.eventsList}
					isLoading={this.props.isLoading}
					onRefresh={this.onRefresh.bind(this)}
				/>
			</Header>
		)
	}
}

const mapStateToProps = (store) => {
	return {
		eventsList: store.events.events,
		idToken: store.user.idToken,
		isLoading: store.events.isLoading
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		fetchEventsList: (idToken) => dispatch(eventOperations.eventsListFetch(idToken))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsListContainer);
