import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import promises from '../../config/promises';
import settings from '../../config/settings';

import ListItem from '../ListItem';

class Event extends Component {

	getEventDetail() {
		promises.getWithToken(settings.urls.EVENTS_URL + this.props.eventId, this.props.idToken)
		.then((response) => {
			Actions.EventDetailRoute(response.data)
		})
		.catch((error) => {
			console.error(error.response.data)
		});
	}

	render() {
		return(
			<ListItem
				onTouchCallback={this.getEventDetail.bind(this)}

				date={this.props.endDate}
				detail={this.props.description}
				subtitle={this.props.farmName}
				title={this.props.title}
			/>
		);
	}
}

Event.propTypes = {
	// from parent
	endDate: React.PropTypes.string,
	eventId: React.PropTypes.number,
	farmName: React.PropTypes.string,
	title: React.PropTypes.string,

	// from redux
	idToken: React.PropTypes.string,
};

const mapStateToProps = (store) => {
	return {
		idToken: store.user.idToken,
	}
}

export default connect(mapStateToProps)(Event);
